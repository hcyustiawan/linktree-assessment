import { Avatar, AvatarProps, Box, Text } from "@chakra-ui/react";

interface ProfileProps extends AvatarProps {}

export const Profile = (props: ProfileProps) => {
  const { name, ...avatarProps } = props;

  return (
    <Box>
      <Avatar {...avatarProps} mb={2} />
      <Text fontSize="sm">{name}</Text>
    </Box>
  );
};
