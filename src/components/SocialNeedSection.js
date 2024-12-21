import { Text, Image, Container, Box, Grid, GridItem } from "@chakra-ui/react";
import { useLanguage } from "./LanguageToggle";
import translations from "./Translation";

const SocialNeedSection = () => {
  const { language } = useLanguage();

  const SocialNeedsDisplay = (imagePath, title, color) => {
    return (
      <Box
        display="flex"
        flexDir="column"
        alignItems="center"
        justifyContent="center"
        border="1px"
        borderRadius="10px"
        borderColor="#F8F8F8"
        p={{ base: "0.3rem", lg: "0.3rem", xl: "1rem" }}
        w={"100%"}
        h={{ base: "30vw", md: "22.5vw", lg: "16vw" }}
        bgColor={color}
      >
        <Image
          src={process.env.PUBLIC_URL + imagePath}
          h={{ base: "3rem", lg: "4rem" }}
        />
        <Text
          fontWeight={800}
          fontSize={{ base: "0.75rem", lg: "1rem" }}
          fontFamily="'Manrope', sans-serif"
          textTransform={"uppercase"}
          textAlign={"center"}
          wordBreak="break-word"
          alignSelf="stretch"
          letterSpacing="0.12rem"
          mt={{ base: "0.5rem", lg: "1.5rem", xl: "2.5rem" }}
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
        px={{ base: "1.5rem", md: "2rem", lg: "3rem", xl: 0 }}
        display={"flex"}
        flexDir={"column"}
        alignItems={{ base: "flex-start", md: "center" }}
        justifyContent="space-between"
        gap={{ base: "1.1rem", lg: "1.5rem" }}
      >
        <Text
          fontWeight={800}
          fontSize={{ base: "1.75rem", md: "2.25rem" }}
          textTransform={"uppercase"}
          fontFamily="'Antonio', sans-serif"
          textColor="#183B5D"
        >
          {translations[language].socialNeed.title}
        </Text>
        <Text
          fontWeight={400}
          fontSize={{ base: "0.875rem", md: "1.25rem" }}
          fontFamily="'Manrope', sans-serif"
        >
          {translations[language].socialNeed.description}
        </Text>

        <Box
          display="flex"
          w={{ base: "100%", lg: "86%" }}
          justifyContent="center"
          px={{ base: "0" }}
          mt={"1rem"}
        >
          <Grid
            templateColumns={{ base: "repeat(2,1fr)", lg: "repeat(5, 1fr)" }}
            gap={"4"}
          >
            <GridItem>
              {SocialNeedsDisplay(
                "images/social_needs/need_children.png",
                translations[language].socialNeed.children,
                "#DAEDFA"
              )}
            </GridItem>
            <GridItem>
              {SocialNeedsDisplay(
                "images/social_needs/need_helpers.png",
                translations[language].socialNeed.domesticHelpers,
                "#F9EEE3"
              )}
            </GridItem>
            <GridItem>
              {SocialNeedsDisplay(
                "images/social_needs/need_issues.png",
                translations[language].socialNeed.domesticIssues,
                "#DAEDFA"
              )}
            </GridItem>
            <GridItem>
              {SocialNeedsDisplay(
                "images/social_needs/need_elder.png",
                translations[language].socialNeed.elderly,
                "#F9EEE3"
              )}
            </GridItem>
            <GridItem>
              {SocialNeedsDisplay(
                "images/social_needs/need_ethnic.png",
                translations[language].socialNeed.ethnicMinorities,
                "#DAEDFA"
              )}
            </GridItem>
            <GridItem>
              {SocialNeedsDisplay(
                "images/social_needs/need_disabled.png",
                translations[language].socialNeed.handicapped,
                "#F9EEE3"
              )}
            </GridItem>
            <GridItem>
              {SocialNeedsDisplay(
                "images/social_needs/need_environment.png",
                translations[language].socialNeed.environmental,
                "#DAEDFA"
              )}
            </GridItem>
            <GridItem>
              {SocialNeedsDisplay(
                "images/social_needs/need_poor.png",
                translations[language].socialNeed.poor,
                "#F9EEE3"
              )}
            </GridItem>
            <GridItem>
              {SocialNeedsDisplay(
                "images/social_needs/need_mental.png",
                translations[language].socialNeed.mentalHealth,
                "#DAEDFA"
              )}
            </GridItem>
            <GridItem>
              {SocialNeedsDisplay(
                "images/social_needs/need_income.png",
                translations[language].socialNeed.lowIncome,
                "#F9EEE3"
              )}
            </GridItem>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default SocialNeedSection;
