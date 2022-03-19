import {
  Box,
  Button,
  ButtonProps,
  Collapse,
  useStyleConfig,
} from "@chakra-ui/react";
import { PropsWithChildren, useCallback, useState } from "react";
import { ShowDetail } from "./ShowDetail";

interface ShowLinkProps extends ButtonProps {
  title: string;
}

const ShowLink = ({
  title,
  children,
  ...props
}: PropsWithChildren<ShowLinkProps>) => {
  const sx = useStyleConfig("CustomLink");
  const [expanded, setExpanded] = useState(false);
  const handleClick = useCallback(() => {
    setExpanded((expanded) => !expanded);
  }, []);

  return (
    <Box width="100%">
      <Button
        {...props}
        sx={sx}
        width="100%"
        height={12}
        display="flex"
        alignItems="center"
        justifyContent="center"
        borderRadius={6}
        onClick={handleClick}
      >
        {title}
      </Button>
      <Collapse in={expanded} unmountOnExit>
        <Box backgroundColor="#F5F7F8">{children}</Box>
      </Collapse>
    </Box>
  );
};

ShowLink.Detail = ShowDetail;

export { ShowLink };
