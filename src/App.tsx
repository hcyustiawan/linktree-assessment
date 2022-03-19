import { extendTheme } from "@chakra-ui/react";
import { Suspense } from "react";

import { Home } from "./pages";
import { ProfileThemeProvider } from "./providers";

const defaultTheme = extendTheme({
  styles: {
    global: {
      "html, body, #root": {
        height: "100%",
        width: "100%",
      },
    },
  },
});

export const App = () => {
  return (
    <Suspense fallback={null}>
      <ProfileThemeProvider defaultTheme={defaultTheme}>
        <Home />
      </ProfileThemeProvider>
    </Suspense>
  );
};
