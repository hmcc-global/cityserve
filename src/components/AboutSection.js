import {
  Flex,
  VStack,
  Image,
  Text,
  Box,
  HStack,
  Link,
  Img,
  Button,
} from "@chakra-ui/react";
import { useLanguage } from "./LanguageToggle";
import translations from "./Translation";

const AboutSection = ({ recapRef, participateRef }) => {
  const { language } = useLanguage();

  const scrollToRecap = () => {
    if (recapRef.current) {
      recapRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToParticipate = () => {
    if (participateRef.current) {
      participateRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <VStack w="100%" gap="0" bgColor="#183B5D" mt={{ base: "9vh", md: "0" }}>
        <Box
          backgroundImage={{
            base: `url(${
              process.env.PUBLIC_URL + "/images/cityserve_bg_mobile.png"
            })`,
            lg: `url(${process.env.PUBLIC_URL + "/images/cityserve_bg.jpg"})`,
          }}
          backgroundPosition={{ base: "bottom", lg: "center" }}
          backgroundSize="cover"
          minW="100%"
        >
          {/* Desktop version */}
          <HStack
            w="100%"
            h="95vh"
            display={{ base: "none", lg: "flex" }}
            letterSpacing="0.05em"
            fontFamily="Antonio"
          >
            <Flex justifyContent="center" w="50%">
              <Image
                w="100%"
                h="auto"
                src={process.env.PUBLIC_URL + "images/cityserve_logo.png"}
              />
            </Flex>
            <Box
              w="50%"
              paddingLeft="5vw"
              paddingY="auto"
              fontWeight="700"
              textColor="#183B5D"
            >
              <Text fontSize="1.8rem" marginBottom="5">
                {translations[language].about.date}
              </Text>
              <Text fontSize="2.75rem" marginBottom="10">
                {translations[language].about.mission_1}{" "}
                <span style={{ color: "#1769B8" }}>
                  {translations[language].about.mission_highlight_1}
                </span>{" "}
                {translations[language].about.mission_and} <br />
                <span style={{ color: "#1769B8" }}>
                  {" "}
                  {translations[language].about.mission_highlight_2}
                </span>{" "}
                <br />
                {translations[language].about.mission_2}
              </Text>
              <HStack>
                <Img
                  src={process.env.PUBLIC_URL + "images/trianglevec_blue.svg"}
                  boxSize={4}
                />
                <Box
                  borderBottomWidth="0"
                  w="fit-content"
                  _hover={{
                    borderBottomWidth: "0.15rem",
                    borderBottomColor: "#1769B8",
                  }}
                >
                  <Link
                    display="flex"
                    alignItems="center"
                    _hover={{
                      textDecor: "none",
                    }}
                    onClick={scrollToParticipate}
                  >
                    <Text
                      textColor="#1769B8"
                      letterSpacing="0.2rem"
                      fontFamily={"'Manrope', sans-serif"}
                      fontWeight={800}
                    >
                      {translations[language].about.learnHow}
                    </Text>
                  </Link>
                </Box>
              </HStack>
            </Box>
          </HStack>

          {/* Mobile version */}
          <VStack
            minH="170vw"
            letterSpacing="0.01rem"
            display={{ base: "flex", lg: "none" }}
            fontFamily="Antonio"
          >
            <Flex justifyContent="center" h="50%">
              <Image
                w="90%"
                h="auto"
                src={process.env.PUBLIC_URL + "images/cityserve_logo.png"}
              />
            </Flex>
            <VStack
              h="50%"
              w="80%"
              alignItems="start"
              fontWeight="700"
              textColor="#183B5D"
              gap={{ base: "1rem", md: "2rem" }}
            >
              <Text
                fontSize={{ base: "1.75rem", md: "2.5rem" }}
                marginBottom="3"
              >
                {translations[language].about.date}
              </Text>
              <Text fontSize={{ base: "2rem", md: "2.75rem" }}>
                {translations[language].about.mission_1}{" "}
                <span style={{ color: "#1769B8" }}>
                  {translations[language].about.mission_highlight_1}
                </span>{" "}
                {translations[language].about.mission_and} <br />
                <span style={{ color: "#1769B8" }}>
                  {" "}
                  {translations[language].about.mission_highlight_2}
                </span>{" "}
                <br />
                {translations[language].about.mission_2}
              </Text>
              <Button
                bgColor="#1769B8"
                textColor="#F8F8F8"
                fontSize={{ base: "0.875rem", md: "1.25rem" }}
                fontWeight="800"
                href="https://forms.gle/UoAwhzPYqgkUsdcf6"
                as={Link}
                target="_blank"
                _hover={{ bg: "#183B5D", textDecor: "none" }}
                fontFamily="Manrope"
                w="70%"
                borderRadius="0.6rem"
                letterSpacing="0.12em"
                p={{ base: "1rem", md: "1.75rem" }}
              >
                {translations[language].interestForm}
              </Button>
              <HStack>
                <Img
                  src={process.env.PUBLIC_URL + "images/trianglevec_blue.svg"}
                  boxSize={4}
                />
                <Box
                  borderBottomWidth="0"
                  w="fit-content"
                  _hover={{
                    borderBottomWidth: "0.15rem",
                    borderBottomColor: "#1769B8",
                  }}
                >
                  <Link
                    display="flex"
                    alignItems="center"
                    _hover={{
                      textDecor: "none",
                    }}
                    onClick={scrollToParticipate}
                    fontFamily={"'Manrope', sans-serif"}
                    fontWeight={800}
                    fontSize={{ base: "0.875rem", md: "1.25rem" }}
                  >
                    <Text textColor="#1769B8" letterSpacing="0.105rem">
                      {translations[language].about.learnHow}
                    </Text>
                  </Link>
                </Box>
              </HStack>
            </VStack>
          </VStack>
        </Box>

        <VStack
          pb={{ base: "5", sm: "10" }}
          paddingTop="1rem"
          fontFamily="Manrope"
        >
          {/* Desktop version */}
          <HStack
            w="100%"
            alignItems="flex-start"
            paddingTop="5vw"
            display={{ base: "none", lg: "flex" }}
            letterSpacing="0.05rem"
          >
            <Flex w="35%" h="100%">
              <Text
                textColor="#99C6E6"
                paddingLeft="10vw"
                fontSize="2.25rem"
                fontFamily="Antonio"
                fontWeight="700"
              >
                {translations[language].about.whatIs}
              </Text>
            </Flex>
            <VStack
              fontSize="1.25rem"
              gap={{ base: "2", sm: "7" }}
              w="65%"
              textColor="#DAEDFA"
              paddingLeft="5vw"
              paddingRight="9vw"
            >
              <Text>{translations[language].about.description_1}</Text>
              <Text>{translations[language].about.description_2}</Text>
              <HStack w="100%">
                <Img
                  src={process.env.PUBLIC_URL + "images/trianglevec_skin.svg"}
                  boxSize={4}
                  my="auto"
                />
                <Box
                  borderBottomWidth="0"
                  w="fit-content"
                  _hover={{
                    borderBottomWidth: "0.15rem",
                    borderBottomColor: "#E0CEBB",
                  }}
                >
                  <Link
                    w="100%"
                    display="flex"
                    _hover={{ textDecor: "none" }}
                    onClick={scrollToRecap}
                  >
                    <Text
                      textColor="#E0CEBB"
                      fontWeight="700"
                      fontSize="1rem"
                      letterSpacing="0.2rem"
                    >
                      {translations[language].about.recap}
                    </Text>
                  </Link>
                </Box>
              </HStack>
            </VStack>
          </HStack>

          {/* Mobile version */}
          <VStack
            w="100%"
            alignItems="flex-start"
            paddingTop="3vw"
            display={{ base: "flex", lg: "none" }}
            letterSpacing="0.01rem"
          >
            <Flex w="100%" h="100%" marginBottom="5">
              <Text
                textColor="#99C6E6"
                paddingLeft="6vw"
                fontSize={{ base: "1.75rem", md: "2.25rem" }}
                fontFamily="Antonio"
                fontWeight="700"
              >
                {translations[language].about.whatIs}
              </Text>
            </Flex>
            <VStack
              fontSize={{ base: "0.875rem", md: "1.25rem" }}
              gap="7"
              w="100%"
              textColor="#DAEDFA"
              paddingLeft="6vw"
              paddingRight="5vw"
              fontFamily="Manrope"
            >
              <Text>{translations[language].about.description_1}</Text>
              <Text>{translations[language].about.description_2}</Text>
              <Link w="100%" display="flex">
                <Img
                  src={process.env.PUBLIC_URL + "images/trianglevec_skin.svg"}
                  boxSize={4}
                  mr={2}
                  my="auto"
                />
                <Text
                  textColor="#E0CEBB"
                  fontWeight="700"
                  onClick={scrollToRecap}
                  letterSpacing="0.105rem"
                  fontSize="0.875rem"
                >
                  {translations[language].about.recap}
                </Text>
              </Link>
            </VStack>
          </VStack>
        </VStack>
      </VStack>
    </>
  );
};

export default AboutSection;
