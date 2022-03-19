import { Box, Flex } from "@chakra-ui/react";
import { ClassicLink, Profile } from "../components";
import { useProfileData } from "../providers";

export const Home = () => {
  const profile = useProfileData();

  if (!profile) {
    return null;
  }

  const { pageTitle, profilePictureUrl } = profile;
  return (
    <Box textAlign="center" fontSize="xl">
      <Flex
        minH="100vh"
        py={8}
        alignItems="center"
        flexDirection="column"
        maxWidth="680px"
        margin="auto"
      >
        <Profile size="xl" name={pageTitle} src={profilePictureUrl} />
        <ClassicLink title="tesat"></ClassicLink>
      </Flex>
    </Box>
  );
};
