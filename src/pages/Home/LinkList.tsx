import { Box, Flex } from "@chakra-ui/react";
import { ClassicLink } from "../../components";
import { AccordionLink } from "../../components/AccordionLink";
import { useMockLinks } from "../../hooks/useMockLinks";
import { ReactComponent as SongKickWordMarkSVG } from "../../icons/by-songkick-wordmark.svg";
import { ActiveLinkProvider } from "../../providers";

export const LinkList = () => {
  const links = useMockLinks();

  if (!links) {
    return null;
  }

  // @improvement: with thousands of links, might want to improve using virtualisation library (eg.: react-virtualise)
  return (
    <ActiveLinkProvider>
      {links.map((link) => {
        const { type } = link;
        if (type === "classic") {
          return (
            <ClassicLink key={link.id} title={link.title} href={link.url} />
          );
        }
        if (type === "show") {
          return (
            <AccordionLink id={link.id} key={link.id} title={link.title}>
              <Box maxHeight="340px" overflowY="scroll">
                {link.data.map((show) => (
                  <AccordionLink.ShowDetail key={show.id} {...show} />
                ))}
              </Box>
              <Flex justifyContent="center" alignItems="center" py={6}>
                <SongKickWordMarkSVG />
              </Flex>
            </AccordionLink>
          );
        }
        if (type === "music") {
          return (
            <AccordionLink id={link.id} key={link.id} title={link.title}>
              <Box>
                {link.data.map((show) => (
                  <AccordionLink.MusicDetail key={show.id} {...show} />
                ))}
              </Box>
            </AccordionLink>
          );
        }
        return null;
      })}
    </ActiveLinkProvider>
  );
};
