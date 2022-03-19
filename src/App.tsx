import { extendTheme, Theme } from "@chakra-ui/react";
import { Suspense } from "react";

import { Home } from "./pages";
import { ProfileThemeProvider } from "./providers";
import { componentTheme, globalStyles } from "./theme";

const defaultTheme = extendTheme(
  { styles: globalStyles },
  { components: componentTheme }
);

console.log(defaultTheme as Theme);
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
