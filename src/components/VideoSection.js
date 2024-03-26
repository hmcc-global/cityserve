import { Box, VStack, AspectRatio } from "@chakra-ui/react";

const VideoSection = () => {
  return (
    <VStack w="100%" bgColor="#183B5D" gap="5" py="10">
      <Box
        bgColor="#EFDDCB"
        fontFamily="Gotham"
        fontWeight="900"
        px="5"
        py="2"
        fontSize={{ base: "3.5vw", sm: "2vw" }}
      >
        CHECK OUT WHAT HAPPENED IN 2023!
      </Box>
      <AspectRatio mb="5" width="80%" ratio={16 / 9}>
        <iframe
          title="video-embed"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          src="https://www.youtube.com/embed/wj7FnRB-0zk?si=5_1uy1aXIN_WIhMH"
        />
      </AspectRatio>
    </VStack>
  );
};

export default VideoSection;
