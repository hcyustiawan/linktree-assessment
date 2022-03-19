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

interface ExpandableLinkProps extends ButtonProps {
  title: string;
  id: string;
}

const ExpandableLink = ({
  id,
  title,
  children,
  ...props
}: PropsWithChildren<ExpandableLinkProps>) => {
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
        <Box backgroundColor="#F5F7F8" borderBottomRadius={4}>
          {children}
        </Box>
      </Collapse>
    </Box>
  );
};

ExpandableLink.ShowDetail = ShowDetail;
ExpandableLink.MusicDetail = MusicDetail;

export { ExpandableLink };
