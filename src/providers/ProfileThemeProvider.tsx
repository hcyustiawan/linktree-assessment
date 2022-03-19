import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { StyleConfig } from "@chakra-ui/theme-tools";
import { Dict } from "@chakra-ui/utils";
import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
import { useMockProfile } from "../hooks";
import { ProfileType } from "../type";

interface ProfileThemeProviderProps {
  defaultTheme: Dict<any>;
}

const ProfileContext = createContext<ProfileType | null>(null);

export const ProfileThemeProvider = ({
  defaultTheme,
  children,
}: PropsWithChildren<ProfileThemeProviderProps>) => {
  const [customTheme, setCustomTheme] = useState<Dict<any> | null>(null);
  const profile = useMockProfile();

  useEffect(() => {
    if (profile) {
      const components: Record<string, StyleConfig> = {
        CustomLink: {
          baseStyle: {
            backgroundColor: profile.theme.linkStyle.backgroundColor,
            color: profile.theme.linkStyle.color,
            _hover: {
              color: profile.theme.linkStyle.backgroundColor,
              backgroundColor: profile.theme.linkStyle.color,
            },
          },
        },
      };
      setCustomTheme(extendTheme(defaultTheme, { components }));
    }
  }, [defaultTheme, profile]);

  return (
    <ProfileContext.Provider value={profile ?? null}>
      {customTheme ? (
        <ChakraProvider theme={customTheme}>{children}</ChakraProvider>
      ) : (
        <ChakraProvider theme={defaultTheme}>{children}</ChakraProvider>
      )}
    </ProfileContext.Provider>
  );
};

export const useProfileData = () => {
  const context = useContext(ProfileContext);
  if (context === undefined) {
    throw new Error(
      "useProfileData should be called within ProfileThemeProvider"
    );
  }
  return context;
};
