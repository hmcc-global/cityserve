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

const AboutSection = ({ recapRef, participateRef }) => {
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
      <VStack w="100%" gap="0" bgColor="#183B5D">
        <Box
          backgroundImage={{
            base: `url(${
              process.env.PUBLIC_URL + "/images/cityserve_bg_mobile.png"
            })`,
            md: `url(${process.env.PUBLIC_URL + "/images/cityserve_bg.jpg"})`,
          }}
          backgroundPosition={{ base: "bottom", md: "center" }}
          backgroundSize="cover"
          minW="100%"
        >
          {/* Desktop version */}
          <HStack
            w="100%"
            h="95vh"
            display={{ base: "none", md: "flex" }}
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
                APRIL 4-6, 2025
              </Text>
              <Text fontSize="2.25rem" marginBottom="10">
                TO BE A{" "}
                <span style={{ color: "#1769B8" }}>VISIBLE DISPLAY</span> AND{" "}
                <br />
                <span style={{ color: "#1769B8" }}>
                  {" "}
                  VIABLE DEMONSTRATION OF
                </span>{" "}
                <br />
                GOD'S LOVE FOR THE CITY
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
                    <Text textColor="#1769B8" letterSpacing="0.2rem">
                      LEARN HOW YOU CAN TAKE PART
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
            display={{ base: "flex", md: "none" }}
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
              alignItems="start"
              fontWeight="700"
              textColor="#183B5D"
              gap="4"
            >
              <Text fontSize="1.75rem" marginBottom="3">
                APRIL 4-6, 2025
              </Text>
              <Text fontSize="2rem">
                TO BE A{" "}
                <span style={{ color: "#1769B8" }}>VISIBLE DISPLAY</span> AND{" "}
                <br />
                <span style={{ color: "#1769B8" }}>
                  {" "}
                  VIABLE DEMONSTRATION OF
                </span>{" "}
                <br />
                GOD'S LOVE FOR THE CITY
              </Text>
              <Button
                bgColor="#1769B8"
                textColor="#F8F8F8"
                fontSize="0.8rem"
                fontWeight="800"
                href="https://forms.gle/UoAwhzPYqgkUsdcf6"
                as={Link}
                target="_blank"
                _hover={{ bg: "#183B5D", textDecor: "none" }}
                fontFamily="Manrope"
                w="70%"
                borderRadius="0.6rem"
              >
                2025 INTEREST FORM
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
                  >
                    <Text textColor="#1769B8" letterSpacing="0.2rem">
                      LEARN HOW YOU CAN TAKE PART
                    </Text>
                  </Link>
                </Box>
              </HStack>
            </VStack>
          </VStack>
        </Box>

        <VStack
          pt="2"
          pb={{ base: "5", sm: "10" }}
          paddingTop="4vw"
          fontFamily="Manrope"
        >
          {/* Desktop version */}
          <HStack
            w="100%"
            alignItems="flex-start"
            paddingTop="5vw"
            display={{ base: "none", md: "flex" }}
            letterSpacing="0.05rem"
          >
            <Flex w="50%" h="100%">
              <Text
                textColor="#99C6E6"
                paddingLeft="10vw"
                fontSize="2.25rem"
                fontFamily="Antonio"
                fontWeight="700"
              >
                WHAT IS CITYSERVE?
              </Text>
            </Flex>
            <VStack
              fontSize="1.25rem"
              gap={{ base: "2", sm: "7" }}
              w="58%"
              textColor="#DAEDFA"
              paddingLeft="5vw"
              paddingRight="9vw"
            >
              <Text>
                CityServe is a city-wide movement to partner with local churches
                and organizations to serve others and demonstrate God’s love for
                the city.
              </Text>
              <Text>
                CityServe Hong Kong was initiated to see churches and
                organizations coming together on a Sunday, to go beyond the four
                walls of the church. We want to be God’s witness by loving and
                serving the poor, marginalised, and unreached people of Hong
                Kong.
              </Text>
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
                    <Text textColor="#E0CEBB" fontWeight="700">
                      CHECK OUT WHAT HAPPENED IN CITYSERVE 2024
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
            display={{ base: "flex", md: "none" }}
            letterSpacing="0.01rem"
          >
            <Flex w="100%" h="100%" marginBottom="5">
              <Text
                textColor="#99C6E6"
                paddingLeft="6vw"
                fontSize="2.25rem"
                fontFamily="Antonio"
                fontWeight="700"
              >
                WHAT IS CITYSERVE?
              </Text>
            </Flex>
            <VStack
              fontSize="0.87rem"
              gap="7"
              w="100%"
              textColor="#DAEDFA"
              paddingLeft="6vw"
              paddingRight="5vw"
              fontFamily="Manrope"
            >
              <Text>
                CityServe is a city-wide movement to partner with local churches
                and organizations to serve others and demonstrate God’s love for
                the city.
              </Text>
              <Text>
                CityServe Hong Kong was initiated to see churches and
                organizations coming together on a Sunday, to go beyond the four
                walls of the church. We want to be God’s witness by loving and
                serving the poor, marginalised, and unreached people of Hong
                Kong.
              </Text>
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
                >
                  CHECK OUT WHAT HAPPENED <br /> IN CITYSERVE 2024
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
