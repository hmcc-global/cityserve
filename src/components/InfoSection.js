import { Text, VStack, Image, HStack, Icon } from "@chakra-ui/react";
import { SocialIcon } from "react-social-icons";
import { FaGlobe } from "react-icons/fa";

const InfoSection = () => {
  return (
    <HStack w="100%" fontFamily="Gotham">
      <VStack w="60%">
        <HStack textColor="#183B5D" w="100%" px="5" gap="5em">
          <Text fontWeight={900} fontSize="2.5vw">
            PARTNERED WITH
          </Text>
          <Image
            src={process.env.PUBLIC_URL + "images/partnered_logo_1.jpg"}
            w="34%"
          />
        </HStack>
        <HStack>
          <VStack textColor="#183B5D" w="50%">
            <HStack justifyContent="space-evenly">
              <Image
                src={process.env.PUBLIC_URL + "images/partnered_logo_2.png"}
                w="20%"
              />
              <Image
                src={process.env.PUBLIC_URL + "images/partnered_logo_3.png"}
                w="27%"
              />
              <Image
                src={process.env.PUBLIC_URL + "images/partnered_logo_4.png"}
                w="28%"
              />
            </HStack>
          </VStack>
          <VStack w="50%">
            <HStack justifyContent="space-evenly">
              <Image
                src={process.env.PUBLIC_URL + "images/partnered_logo_5.png"}
                w="20%"
              />
              <Image
                src={process.env.PUBLIC_URL + "images/partnered_logo_6.png"}
                w="27%"
              />
              <Image
                src={process.env.PUBLIC_URL + "images/partnered_logo_7.jpg"}
                w="28%"
              />
            </HStack>
          </VStack>
        </HStack>
        <HStack justifyContent="space-around" w="100%">
          <Text fontWeight={900} fontSize="2.5vw">
            NGOs
          </Text>
          <Text fontWeight={900} fontSize="2.5vw">
            Churches
          </Text>
        </HStack>
      </VStack>
      <VStack
        w="40%"
        textColor="#FFFFFF"
        bgColor="#183B5D"
        alignItems="end"
        pr="8"
      >
        <Text fontWeight={900} fontSize="2.5vw">
          Contact Us
        </Text>
        <Text fontSize="1.2vw">
          if you are interested or if you have any questions!
        </Text>
        <HStack gap={0}>
          <SocialIcon
            target="_blank"
            bgColor="transparent"
            fgColor="white"
            url="https://www.instagram.com/cityservehk/"
          />
          <Text fontSize="1.7vw">@cityservehk</Text>
        </HStack>
        <HStack gap={2}>
          <Icon
            target="_blank"
            network="website"
            as={FaGlobe}
            boxSize={6}
            url="https://www.cityservehk.org"
          />
          <Text fontSize="1.7vw">cityservehk.org</Text>
        </HStack>
        <HStack gap={0}>
          <SocialIcon
            target="_blank"
            bgColor="transparent"
            fgColor="white"
            network="email"
            url="mailto:cityserve@hongkong.hmcc.net"
          />
          <Text fontSize="1.7vw">cityserve@hongkong.hmcc.net</Text>
        </HStack>
      </VStack>
    </HStack>
  );
};

export default InfoSection;
