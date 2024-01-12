import { Text, VStack, Image, HStack, Icon, Container } from "@chakra-ui/react";
import { SocialIcon } from "react-social-icons";
import { FaGlobe } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

const InfoSection = () => {
  return (
    <Container minW="100%" mx="0" px="0">
      <HStack
        w="100%"
        fontFamily="Gotham"
        display={{ base: "none", sm: "flex" }}
      >
        <VStack w="60%">
          <HStack textColor="#183B5D" w="100%" px="5" gap="5em">
            <Text fontWeight={900} fontSize="2.5vw">
              PARTNERED WITH
            </Text>
            {/* <Image
              src={process.env.PUBLIC_URL + "images/partnered_logo_1.jpg"}
              w="34%"
            /> */}
          </HStack>
          <HStack w="100%">
            <VStack textColor="#183B5D" w="100%">
              <HStack justifyContent="space-evenly" w="100%">
                <Image
                  src={process.env.PUBLIC_URL + "images/partnered_logo_2.png"}
                  w="14%"
                />
                <Image
                  src={process.env.PUBLIC_URL + "images/partnered_logo_3.png"}
                  w="17%"
                />
                <Image
                  src={process.env.PUBLIC_URL + "images/partnered_logo_4.png"}
                  w="19%"
                />
                <Image
                  src={process.env.PUBLIC_URL + "images/partnered_logo_5.png"}
                  w="11%"
                />
              </HStack>
            </VStack>
            {/* <VStack w="50%">
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
            </VStack> */}
          </HStack>
          {/* <HStack justifyContent="space-around" w="100%">
            <Text fontWeight={900} fontSize="2.5vw">
              NGOs
            </Text>
            <Text fontWeight={900} fontSize="2.5vw">
              Churches
            </Text>
          </HStack> */}
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
            <Text fontSize="1.4vw">@cityservehk</Text>
          </HStack>
          <HStack gap={2}>
            <Icon
              target="_blank"
              network="website"
              as={FaGlobe}
              boxSize={6}
              url="https://www.cityservehk.org"
            />
            <Text fontSize="1.4vw">cityservehk.org</Text>
          </HStack>
          <HStack gap={0}>
            <SocialIcon
              target="_blank"
              bgColor="transparent"
              fgColor="white"
              network="email"
              url="mailto:cityserve@hongkong.hmcc.net"
            />
            <Text fontSize="1.4vw">cityserve@hongkong.hmcc.net</Text>
          </HStack>
        </VStack>
      </HStack>
      {/* Mobile version */}
      <VStack display={{ base: "flex", sm: "none" }} pt="3">
        <Text fontWeight={700} fontSize="4vw" mb="3">
          PARTNERED WITH
        </Text>
        <HStack gap={0} paddingBottom={4}>
          <VStack w="100%" pl="3">
            <HStack justifyContent="center">
              <Image
                src={process.env.PUBLIC_URL + "images/partnered_logo_2.png"}
                w="19%"
              />
              <Image
                src={process.env.PUBLIC_URL + "images/partnered_logo_3.png"}
                w="25%"
              />
              <Image
                src={process.env.PUBLIC_URL + "images/partnered_logo_4.png"}
                w="27%"
              />
              <Image
                src={process.env.PUBLIC_URL + "images/partnered_logo_5.png"}
                w="17%"
              />
            </HStack>
            {/* <Text fontWeight={700} fontSize="4vw">
              NGOs
            </Text> */}
          </VStack>
          {/* <VStack w="60%">
            <HStack justifyContent="center">
              <Image
                src={process.env.PUBLIC_URL + "images/partnered_logo_5.png"}
                w="12%"
              />
              <Image
                src={process.env.PUBLIC_URL + "images/partnered_logo_6.png"}
                w="12%"
              />
              <Image
                src={process.env.PUBLIC_URL + "images/partnered_logo_7.jpg"}
                w="12%"
              />
              <Image
                src={process.env.PUBLIC_URL + "images/partnered_logo_1.jpg"}
                w="33%"
              />
            </HStack>
            <Text fontWeight={700} fontSize="4vw">
              Churches
            </Text>
          </VStack> */}
        </HStack>
        <VStack w="100%" textColor="#FFFFFF" bgColor="#183B5D" gap="0" pb="9">
          <Text fontWeight={600} fontSize="5vw">
            Contact Us
          </Text>
          <Text fontFamily="Gotham-light" fontWeight={100} fontSize="2vw">
            if you are interested or if you have any questions!
          </Text>
          <HStack gap={1} pt="2">
            <Icon
              target="_blank"
              bgColor="transparent"
              fgColor="white"
              as={FaInstagram}
              boxSize={3}
              url="https://www.instagram.com/cityservehk/"
            />
            <Text fontSize="2vw">@cityservehk</Text>
          </HStack>
          <HStack gap={1}>
            <Icon
              target="_blank"
              network="website"
              as={FaGlobe}
              boxSize={3}
              url="https://www.cityservehk.org"
            />
            <Text fontSize="2vw">cityservehk.org</Text>
          </HStack>
          <HStack gap={1}>
            <Icon
              target="_blank"
              bgColor="transparent"
              fgColor="white"
              as={AiOutlineMail}
              boxSize={3}
              network="email"
              url="mailto:cityserve@hongkong.hmcc.net"
            />
            <Text fontSize="2vw">cityserve@hongkong.hmcc.net</Text>
          </HStack>
        </VStack>
      </VStack>
    </Container>
  );
};

export default InfoSection;
