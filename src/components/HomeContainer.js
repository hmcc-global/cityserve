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
        display={{ base: "none", sm: "block" }}
        src={process.env.PUBLIC_URL + "images/social_needs.png"}
        bgColor="#99C6E6"
        p="5em"
        w="100%"
      />
      <Image
        display={{ base: "block", sm: "none" }}
        src={process.env.PUBLIC_URL + "images/social_needs_mobile.png"}
        bgColor="#99C6E6"
        pt="1em"
        pb="2em"
        px="0.5em"
        w="100%"
      />
      <Image
        display={{ base: "none", sm: "block" }}
        src={process.env.PUBLIC_URL + "images/numbers.png"}
        bgColor="#183B5D"
        p="5em"
        w="100%"
      />
      <Image
        display={{ base: "block", sm: "none" }}
        src={process.env.PUBLIC_URL + "images/numbers_mobile.png"}
        bgColor="#183B5D"
        p="1em"
        w="100%"
      />
      <Flex
        display={{ base: "none", sm: "flex" }}
        justifyContent="center"
        bgColor="#FFFCF3"
        w="100%"
      >
        <Image
          src={process.env.PUBLIC_URL + "images/how.png"}
          p="5em"
          w="80%"
        />
      </Flex>
      <Flex
        display={{ base: "flex", sm: "none" }}
        justifyContent="center"
        bgColor="#FFFCF3"
        w="100%"
      >
        <Image
          src={process.env.PUBLIC_URL + "images/how_mobile.png"}
          py="1.5em"
          w="95%"
        />
      </Flex>
      <VideoSection />
      <JoinUsSection />
      <InfoSection />
    </VStack>
  );
};

export default HomeContainer;
