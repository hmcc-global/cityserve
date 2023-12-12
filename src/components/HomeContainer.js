import { Image, VStack, Flex } from "@chakra-ui/react";
import AboutSection from "./AboutSection";
import VideoSection from "./VideoSection";
import JoinUsSection from "./JoinUsSection";
import InfoSection from "./InfoSection";

const HomeContainer = () => {
  return (
    <VStack gap={0}>
      <AboutSection />
      <Image
        src={process.env.PUBLIC_URL + "images/social_needs.png"}
        bgColor="#99C6E6"
        p="5em"
        w="100%"
      />
      <Image
        src={process.env.PUBLIC_URL + "images/numbers.png"}
        bgColor="#183B5D"
        p="5em"
        w="100%"
      />
      <Flex justifyContent="center" bgColor="#FFFCF3" w="100%">
        <Image
          src={process.env.PUBLIC_URL + "images/how.png"}
          p="5em"
          w="80%"
        />
      </Flex>
      <VideoSection />
      <JoinUsSection />
      <InfoSection />
    </VStack>
  );
};

export default HomeContainer;
