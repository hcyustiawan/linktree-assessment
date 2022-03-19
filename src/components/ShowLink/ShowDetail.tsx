import { Box, Text } from "@chakra-ui/react";
import { ShowDetailType } from "../../type";

interface ShowDetailProps extends ShowDetailType {}
export const ShowDetail = ({ date, location }: ShowDetailProps) => {
  return (
    <Box
      display="flex"
      px={4}
      py={2.5}
      alignItems="center"
      justifyContent="space-between"
    >
      <Box textAlign="left">
        <Text>{date}</Text>
        <Text fontSize="sm">{location}</Text>
      </Box>
      Arrow
    </Box>
  );
};
