import { ChakraProvider, extendTheme, Flex, Spinner } from "@chakra-ui/react";
import { Suspense } from "react";

import { Home } from "./pages";

const theme = extendTheme({
  styles: {
    global: {
      "html, body, #root": {
        height: "100%",
        width: "100%",
      },
    },
  },
});

export const App = () => (
  <ChakraProvider theme={theme}>
    <Suspense
      fallback={
        <Flex
          justifyContent="center"
          alignItems="center"
          width="100%"
          height="100%"
        >
          <Spinner color="green.400" size="lg" />
        </Flex>
      }
    >
      <Home />
    </Suspense>
  </ChakraProvider>
);
