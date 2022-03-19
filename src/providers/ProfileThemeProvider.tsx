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
      window.document.title = `${profile?.pageTitle} | Linktree`;
    } else {
      window.document.title = "Linktree";
    }
  }, [profile]);

  useEffect(() => {
    if (profile) {
      //@assumption: api service will return the same style config.
      //@todo: can be improve to just pass in the whole theme from the profile
      const components: Record<string, StyleConfig> = profile.theme.components;
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
