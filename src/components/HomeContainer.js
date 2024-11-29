import { Image, VStack, Flex } from "@chakra-ui/react";
import AboutSection from "./AboutSection";
import ReCap from "./ReCap";
import JoinUsSection from "./JoinUsSection";
import InfoSection from "./InfoSection";
import NumbersSection from "./NumbersSection";

const HomeContainer = ({ recapRef, participateRef }) => {
  return (
    <VStack gap={0}>
      <AboutSection />
      <ReCap ref={recapRef} />
      <JoinUsSection ref={participateRef} />
      {/* <InfoSection /> */}
    </VStack>
  );
};

export default HomeContainer;
