import { Box, Flex, Spinner, VStack } from "@chakra-ui/react";
import { Suspense } from "react";
import { Profile } from "../../components";
import { useProfileData } from "../../providers";
import { LinkList } from "./LinkList";
import { ReactComponent as LinkTree } from "../../icons/logo.svg";

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
        px={5}
        alignItems="center"
        flexDirection="column"
        maxWidth="700px"
        margin="auto"
      >
        <Profile size="xl" name={pageTitle} src={profilePictureUrl} />
        <VStack spacing={4} flex={1} my={6} width="100%">
          <Suspense fallback={<Spinner />}>
            <LinkList />
          </Suspense>
        </VStack>
        <LinkTree />
      </Flex>
    </Box>
  );
};
