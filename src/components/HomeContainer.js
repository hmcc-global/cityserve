import { Image, VStack, Flex } from "@chakra-ui/react";
import AboutSection from "./AboutSection";
import ReCap from "./ReCap";
import JoinUsSection from "./JoinUsSection";
import InfoSection from "./InfoSection";
import NumbersSection from "./NumbersSection";

const HomeContainer = () => {
  return (
    <VStack gap={0}>
      <AboutSection />
      <ReCap />
      <JoinUsSection />
      {/* <InfoSection /> */}
    </VStack>
  );
};

export default HomeContainer;
