import {
  Flex,
  VStack,
  Image,
  Text,
  Box,
  HStack,
  Link,
  Img,
} from "@chakra-ui/react";

const AboutSection = () => {
  return (
    <>
      <VStack w="100%" gap="0" fontFamily="Antonio" letterSpacing="0.05rem">
        <Box
          backgroundImage={{
            base: `url(${
              process.env.PUBLIC_URL + "/images/cityserve_bg_base.jpg"
            })`,
            md: `url(${process.env.PUBLIC_URL + "/images/cityserve_bg.jpg"})`,
          }}
          backgroundPosition="center"
          backgroundSize="cover"
          minW="100%"
        >
          <HStack w="100%" h="90vh">
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
              fontWeight="800"
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
              <Link display="flex" alignItems="center">
                <Img
                  src={process.env.PUBLIC_URL + "images/trianglevec.svg"}
                  boxSize={4}
                  mr={2}
                />
                <Text textColor="#1769B8" letterSpacing="0.2rem">
                  LEARN HOW YOU CAN TAKE PART
                </Text>
              </Link>
            </Box>
          </HStack>
        </Box>
        <VStack
          bgColor="#183B5D"
          pt="2"
          pb={{ base: "5", sm: "10" }}
          paddingTop="4vw"
        >
          <HStack w="100%" alignItems="flex-start" paddingTop="5vw">
            <Flex w="50%" h="100%">
              <Text textColor="#99C6E6" paddingLeft="10vw" fontSize="2.25rem">
                WHAT IS CITYSERVE?
              </Text>
            </Flex>
            <VStack
              fontFamily="Gotham-light"
              fontSize="1.25rem"
              gap={{ base: "2", sm: "7" }}
              w="58%"
              textColor="#DAEDFA"
              paddingLeft="5vw"
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
            </VStack>
          </HStack>
        </VStack>
      </VStack>
    </>
  );
};

export default AboutSection;
