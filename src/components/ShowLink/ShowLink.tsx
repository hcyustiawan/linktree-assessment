import {
  Box,
  Button,
  ButtonProps,
  Collapse,
  Flex,
  useStyleConfig,
} from "@chakra-ui/react";
import {
  Children,
  PropsWithChildren,
  ReactElement,
  useCallback,
  useState,
} from "react";
import { ShowDetail } from "./ShowDetail";
import { ReactComponent as SongKickWordMarkSVG } from "../../icons/by-songkick-wordmark.svg";

interface ShowLinkProps extends ButtonProps {
  title: string;
}

const ShowLink = ({
  title,
  children,
  ...props
}: PropsWithChildren<ShowLinkProps>) => {
  const sx = useStyleConfig("LinkStyle");
  const [expanded, setExpanded] = useState(false);
  const handleClick = useCallback(() => {
    setExpanded((expanded) => !expanded);
  }, []);

  const filteredChildren = Children.map(children, (child) => {
    if ((child as ReactElement).type === ShowDetail) {
      return child;
    }
  });

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
        <Box backgroundColor="#F5F7F8">
          <Box maxHeight="340px" overflowY="scroll">
            {filteredChildren}
          </Box>
          <Flex justifyContent="center" alignItems="center" py={6}>
            <SongKickWordMarkSVG />
          </Flex>
        </Box>
      </Collapse>
    </Box>
  );
};

ShowLink.Detail = ShowDetail;

export { ShowLink };
