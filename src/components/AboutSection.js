import {
  Flex,
  VStack,
  Image,
  Text,
  Box,
  Container,
  HStack,
} from "@chakra-ui/react";

const AboutSection = () => {
  return (
    <VStack w="100%" gap="0">
      <Container
        backgroundImage={process.env.PUBLIC_URL + "images/cityserve_bg.png"}
        backgroundPosition="center"
        backgroundSize="cover"
        minW="100%"
      >
        <Flex
          alignItems="center"
          flexDirection="column"
          background="radial-gradient(30% 55% at 50% 50%, #FFF 30%, rgba(255, 255, 255, 0.00) 100%);"
          borderRadius="100%"
        >
          <Image
            src={process.env.PUBLIC_URL + "images/cityserve_logo.png"}
            w="70%"
          />
          <Box
            textAlign="center"
            background="radial-gradient(50% 50% at 50% 50%, #FFF 30%, rgba(255, 255, 255, 0.00) 100%)"
            pb="14"
          >
            <Text
              fontFamily="Gotham"
              textShadow="0px 3.428px 46.274px rgba(255, 255, 255, 0.55);"
              fontSize="4.5vw"
            >
              MARCH 17, 2024
            </Text>
            <Text
              fontFamily="Gotham-light"
              fontWeight="500"
              fontSize="2vw"
              background="radial-gradient(50% 50% at 50% 50%, #FFF 0%, rgba(255, 255, 255, 0.00) 100%)"
            >
              <b>Visible display</b> and <b>viable demonstration</b> of God’s
              love for the city
            </Text>
          </Box>
        </Flex>
      </Container>
      <VStack bgColor="#FFFCF3" pt="2" pb="10">
        <HStack w="100%">
          <Image
            src={process.env.PUBLIC_URL + "images/cityserve_logo_small.png"}
            w="23%"
            my="12"
            ml="12"
            mr="4"
          />
          <VStack fontFamily="Gotham-light" fontSize="1.6vw" gap="7" w="58%">
            <Box
              bgColor="#EFDDCB"
              textColor="#183B5D"
              fontFamily="Gotham"
              fontWeight="900"
              px="5"
              alignSelf="start"
            >
              WHAT IS CITYSERVE?
            </Box>
            <Text>
              CityServe is a city-wide movement to partner with local churches
              and organizations to serve others and demonstrate God’s love for
              the city.
            </Text>
            <Text>
              We want to see churches and organizations coming together on a
              Sunday, to go beyond the four walls of the church and be God’s
              witness by loving and serving the poor, marginalised, and
              unreached people of Hong Kong.
            </Text>
          </VStack>
        </HStack>
        <Image
          src={process.env.PUBLIC_URL + "images/cityserve_org.png"}
          w="70%"
        />
      </VStack>
    </VStack>
  );
};

export default AboutSection;
