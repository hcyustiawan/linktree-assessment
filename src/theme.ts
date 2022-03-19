import { StyleConfig, Styles } from "@chakra-ui/theme-tools";

export const globalStyles: Styles = {
  global: {
    "html, body, #root": {
      height: "100%",
      width: "100%",
    },
  },
};

export const componentTheme: Record<string, StyleConfig> = {
  CustomLink: {
    baseStyle: {
      backgroundColor: "#39E09B",
      color: "#263238",
      _hover: {
        color: "#39E09B",
        backgroundColor: "#263238",
      },
    },
  },
};
