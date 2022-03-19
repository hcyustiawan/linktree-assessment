import {
  Box,
  Button,
  ButtonProps,
  Collapse,
  useStyleConfig,
} from "@chakra-ui/react";
import { PropsWithChildren, useCallback, useState } from "react";
import { MusicDetail } from "./MusicDetail";
import { ShowDetail } from "./ShowDetail";

interface AccordionLinkProps extends ButtonProps {
  title: string;
}

const AccordionLink = ({
  title,
  children,
  ...props
}: PropsWithChildren<AccordionLinkProps>) => {
  const sx = useStyleConfig("LinkStyle");
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

AccordionLink.ShowDetail = ShowDetail;
AccordionLink.MusicDetail = MusicDetail;

export { AccordionLink };
