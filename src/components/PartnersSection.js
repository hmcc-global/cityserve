import {
  Text,
  VStack,
  Image,
  Container,
  Box,
  Flex,
  Grid,
  GridItem,
} from "@chakra-ui/react";

const PartnersSection = () => {
  const PartnerDisplayBox = (imagePath, title) => {
    return (
      <Box
        display="flex"
        flexDir="column"
        alignItems="center"
        justifyContent="center"
        border="1px"
        borderRadius="10px"
        borderColor="#F8F8F8"
        boxShadow="0px 0px 3px 0px rgba(0, 0, 0, 0.2)"
        p="1.25rem"
        w={{ base: "42.5vw", lg: "17.5vw", xl: "17.5vw" }}
        minH={"100%"}
      >
        <Image src={process.env.PUBLIC_URL + imagePath} h="6rem" mb={"1rem"} />
        <Text
          fontWeight={800}
          fontSize={{ base: "0.875rem", md: "1rem" }}
          fontFamily="'Manrope', sans-serif"
          textTransform={"uppercase"}
          textAlign={"center"}
          wordBreak="break-word"
          maxW={{ base: "37.5vw", lg: "12.5vw", xl: "15vw" }}
          letterSpacing={{ base: "0.105rem", lg: "0.12rem" }}
        >
          {title}
        </Text>
      </Box>
    );
  };

  return (
    <Container maxW="container.xl" py="4rem" px={0}>
      <Box
        py={0}
        px={{ base: "1rem", md: "2rem", lg: "3rem", xl: 0 }}
        maxW="100%"
        fontFamily="Gotham"
        display={"flex"}
        flexDirection={{ base: "column", lg: "row" }}
        alignItems="flex-start"
        justifyContent="space-between"
        gap={{ base: "2rem", lg: "2rem" }}
      >
        <VStack
          textColor="#183B5D"
          w="100%"
          gap="1rem"
          width={{ base: "100%", lg: "20vw" }}
          alignItems="flex-start"
        >
          <Text
            fontWeight={800}
            fontSize={{ base: "1.75rem", md: "2.25rem" }}
            textTransform={"uppercase"}
            fontFamily="'Antonio', sans-serif"
          >
            Our Partners
          </Text>
          <Text
            fontWeight={400}
            fontSize={{ base: "0.875rem", md: "1.25rem" }}
            fontFamily="'Manrope', sans-serif"
          >
            Organizations and ministries partnered with us during{" "}
            <strong>CityServe 2024</strong>.
          </Text>
        </VStack>
        <Flex
          display={{ base: "none", lg: "flex" }}
          wrap={"wrap"}
          justifyContent={"flex-end"}
          textColor="#183B5D"
          flex={1}
          gap={"1rem"}
          maxW="100%"
        >
          {PartnerDisplayBox(
            "images/partnered_logo_2.png",
            "INNER CITY MINISTRIES"
          )}
          {PartnerDisplayBox(
            "images/partnered_logo_3.png",
            "hong kong church network for the poor"
          )}
          {PartnerDisplayBox("images/christian_action.png", "christian action")}
          {PartnerDisplayBox("images/manna.png", "MANNA MINISTRY")}
          {PartnerDisplayBox("images/mothers_choice.png", "MOTHER'S CHOICE")}
          {PartnerDisplayBox("images/s&d.png", "SONS & DAUGHTER HK")}
          {PartnerDisplayBox(
            "images/partnered_logo_5.png",
            "jesus the living god international ministry"
          )}
        </Flex>
        <Box display={{ base: "flex", lg: "none" }} w="100%" p={0}>
          <Grid templateColumns="repeat(2, 1fr)" gap={"6"}>
            <GridItem>
              {PartnerDisplayBox(
                "images/partnered_logo_2.png",
                "INNER CITY MINISTRIES"
              )}
            </GridItem>
            <GridItem>
              {PartnerDisplayBox(
                "images/partnered_logo_3.png",
                "hong kong church network for the poor"
              )}
            </GridItem>
            <GridItem>
              {PartnerDisplayBox(
                "images/christian_action.png",
                "christian action"
              )}
            </GridItem>
            <GridItem>
              {PartnerDisplayBox("images/manna.png", "MANNA MINISTRY")}
            </GridItem>
            <GridItem>
              {PartnerDisplayBox(
                "images/mothers_choice.png",
                "MOTHER'S CHOICE"
              )}
            </GridItem>
            <GridItem>
              {PartnerDisplayBox("images/s&d.png", "SONS & DAUGHTER HK")}
            </GridItem>
            <GridItem>
              {PartnerDisplayBox(
                "images/partnered_logo_5.png",
                "jesus the living god international ministry"
              )}
            </GridItem>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default PartnersSection;
