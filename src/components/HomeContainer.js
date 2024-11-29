import { VStack } from "@chakra-ui/react";
import AboutSection from "./AboutSection";
import ReCap from "./ReCap";
import JoinUsSection from "./JoinUsSection";
import InfoSection from "./InfoSection";
import ParticipateSection from "./ParticipateSection";

const HomeContainer = () => {
  return (
    <VStack gap={0}>
      <AboutSection />
      <ReCap />
      <ParticipateSection />
      <JoinUsSection />
      <PartnersSection />
    </VStack>
  );
};

export default HomeContainer;
