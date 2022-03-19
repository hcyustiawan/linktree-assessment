import { Flex, Link, Text } from "@chakra-ui/react";
import { ReactComponent as SpotifySVG } from "../../icons/spotify.svg";
import { ReactComponent as YoutubeSVG } from "../../icons/youtube.svg";
import { ReactComponent as AppleSVG } from "../../icons/apple-music.svg";

import { ReactComponent as ArrowSVG } from "../../icons/arrow.svg";

import styled from "@emotion/styled";

import { MusicDetailType } from "../../type";

interface MusicDetailProps extends MusicDetailType {}

//@todo: this can be its own component (similar with ShowDetail)
const Detail = styled(Link)`
  & + & {
    border-top: 1px solid rgba(0, 0, 0, 0.1);
  }

  &:hover {
    text-decoration: none;
  }
`;

const Arrow = styled(ArrowSVG)`
  transform: rotate(-90deg);
`;

const MusicDetail = ({ url, type }: MusicDetailProps) => {
  return (
    <Detail
      display="flex"
      mx={4}
      py={4}
      alignItems="center"
      justifyContent="space-between"
      href={url}
      isExternal
    >
      {/* @todo: more music type */}
      {type === "spotify" && (
        <>
          <Flex alignItems="center">
            <SpotifySVG />
            <Text marginLeft={3}>Spotify</Text>
          </Flex>
          <Arrow />
        </>
      )}
      {type === "youtube" && (
        <>
          <Flex alignItems="center">
            <YoutubeSVG />
            <Text marginLeft={3}>YouTube Music</Text>
          </Flex>
          <Arrow />
        </>
      )}
      {type === "apple" && (
        <>
          <Flex alignItems="center">
            <AppleSVG />
            <Text marginLeft={3}>Apple Music</Text>
          </Flex>
          <Arrow />
        </>
      )}
    </Detail>
  );
};

MusicDetail.displayName = "MusicDetail";

export { MusicDetail };
