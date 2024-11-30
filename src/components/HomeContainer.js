import { VStack } from "@chakra-ui/react";
import AboutSection from "./AboutSection";
import ReCap from "./ReCap";
import JoinUsSection from "./JoinUsSection";
import ParticipateSection from "./ParticipateSection";
import PartnersSection from "./PartnersSection";
import SocialNeedSection from "./SocialNeedSection";

const HomeContainer = ({ recapRef, joinusRef, participateRef }) => {
  return (
    <VStack gap={0}>
      <AboutSection recapRef={recapRef} participateRef={participateRef} />
      <SocialNeedSection />
      <JoinUsSection ref={joinusRef} />
      <ReCap ref={recapRef} />
      <ParticipateSection ref={participateRef} />
      <JoinUsSection />
      <PartnersSection />
    </VStack>
  );
};

export default HomeContainer;
