import { Box, Link, Text } from "@chakra-ui/react";
import styled from "@emotion/styled";

import { ShowDetailType } from "../../type";
import { ReactComponent as ArrowSVG } from "../../icons/arrow.svg";

interface ShowDetailProps extends ShowDetailType {}
const Detail = styled(Link)`
  & + & {
    border-top: 1px solid rgba(0, 0, 0, 0.1);
  }
  &:last-of-type {
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }
  &:hover {
    text-decoration: none;
  }
`;

const Arrow = styled(ArrowSVG)`
  transform: rotate(-90deg);
`;

const ShowDetail = ({ date, location, soldOut, url }: ShowDetailProps) => {
  return (
    <Detail
      display="flex"
      mx={4}
      py={4}
      alignItems="center"
      justifyContent="space-between"
      href={url}
      isExternal
      // @todo if sold out make it unclickable
      // {...!soldOut && {href: url, isExternal:true }}
    >
      <Box textAlign="left">
        <Text>{date}</Text>
        <Text fontSize="sm">{location}</Text>
      </Box>
      {soldOut ? <Text fontSize="sm">Sold Out</Text> : <Arrow />}
    </Detail>
  );
};

ShowDetail.displayName = "ShowDetail";
export { ShowDetail };
