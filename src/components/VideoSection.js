import { Box, VStack } from "@chakra-ui/react";

const VideoSection = () => {
  return (
    <VStack w="100%" bgColor="#183B5D" gap="5" py="10">
      <Box bgColor="#EFDDCB" fontFamily="Gotham" fontWeight="900" px="5">
        CHECK OUT WHAT HAPPENED LAST YEAR!
      </Box>
      <iframe
        title="video-embed"
        width="853"
        height="500"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        src="https://www.youtube.com/embed/wj7FnRB-0zk?si=5_1uy1aXIN_WIhMH"
      />
    </VStack>
  );
};

export default VideoSection;
