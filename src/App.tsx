import { extendTheme } from "@chakra-ui/react";
import { Suspense } from "react";

import { Home } from "./pages";
import { ProfileThemeProvider } from "./providers";
import { componentTheme, globalStyles } from "./theme";

const defaultTheme = extendTheme(
  { styles: globalStyles },
  { components: componentTheme }
);

export const App = () => {
  // @todo: suspense fallback can be anything, putting null for the time being
  return (
    <Suspense fallback={null}>
      <ProfileThemeProvider defaultTheme={defaultTheme}>
        <Home />
      </ProfileThemeProvider>
    </Suspense>
  );
};
