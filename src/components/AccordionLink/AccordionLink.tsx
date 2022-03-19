import {
  Box,
  Button,
  ButtonProps,
  Collapse,
  useStyleConfig,
} from "@chakra-ui/react";
import { PropsWithChildren, useCallback } from "react";
import { useActiveLinkProvider } from "../../providers";
import { MusicDetail } from "./MusicDetail";
import { ShowDetail } from "./ShowDetail";

interface AccordionLinkProps extends ButtonProps {
  title: string;
  id: string;
}

const AccordionLink = ({
  id,
  title,
  children,
  ...props
}: PropsWithChildren<AccordionLinkProps>) => {
  const sx = useStyleConfig("LinkStyle");
  const { active, setActive } = useActiveLinkProvider();

  const handleClick = useCallback(() => {
    setActive((current) => (current === id ? null : id));
  }, [id, setActive]);

  console.log(active);
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
      <Collapse in={active === id} unmountOnExit>
        <Box backgroundColor="#F5F7F8">{children}</Box>
      </Collapse>
    </Box>
  );
};

AccordionLink.ShowDetail = ShowDetail;
AccordionLink.MusicDetail = MusicDetail;

export { AccordionLink };
