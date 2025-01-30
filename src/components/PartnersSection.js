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
import { useLanguage } from "./LanguageToggle";
import translations from "./Translation";

const PartnersSection = () => {
  const { language } = useLanguage();

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
        px="1rem"
        py="1.25rem"
        w={{ base: "42.5vw", lg: "17.5vw", xl: "15vw" }}
        minH={"100%"}
      >
        <Grid templateRows="repeat(2, 1fr)" gap={"1rem"} w="100%">
          <GridItem display="flex" justifyContent="center">
            <Image
              src={process.env.PUBLIC_URL + imagePath}
              minH="6rem"
              maxH="6rem"
            />
          </GridItem>
          <GridItem
            display="flex"
            justifyContent="center"
            alignItems={"center"}
          >
            <Text
              fontWeight={800}
              fontSize={{ base: "0.875rem", md: "1rem" }}
              fontFamily="'Manrope', sans-serif"
              textTransform={"uppercase"}
              textAlign={"center"}
              wordBreak="break-word"
              color={"#183B5D"}
              letterSpacing={"0.05rem"}
            >
              {title}
            </Text>
          </GridItem>
        </Grid>
      </Box>
    );
  };

  return (
    <Container
      maxW="container.xl"
      py={{ base: "1rem", md: "3rem", lg: "4.5rem", xl: "6rem" }}
      px={{ base: "1rem", md: "2rem", lg: "3rem", xl: 0 }}
    >
      <Box
        p={0}
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
          width={{ base: "100%", lg: "15vw" }}
          alignItems="flex-start"
        >
          <Text
            fontWeight={800}
            fontSize={{ base: "1.75rem", md: "2.25rem" }}
            textTransform={"uppercase"}
            fontFamily="'Antonio', sans-serif"
          >
            {translations[language].partners.title}
          </Text>
          <Text
            fontWeight={400}
            fontSize={{ base: "0.875rem", md: "1.25rem" }}
            fontFamily="'Manrope', sans-serif"
            display={language === "en" ? "block" : "none"}
          >
            {translations[language].partners.description}{" "}
            <strong>CityServe 2024</strong>.
          </Text>
          <Text
            fontWeight={400}
            fontSize={{ base: "0.875rem", md: "1.25rem" }}
            fontFamily="'Manrope', sans-serif"
            display={language === "zh" ? "block" : "none"}
          >
            在<strong>CityServe 2024</strong>
            {translations[language].partners.description}
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
