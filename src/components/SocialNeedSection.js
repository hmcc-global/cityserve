import { Text, Image, Container, Box, Grid, GridItem } from "@chakra-ui/react";

const SocialNeedSection = () => {
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
        w={{ base: "100%", lg: "100%" }}
        h={{ base: "22vw", lg: "16vw" }}
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
        maxW="100%"
        display={"flex"}
        flexDirection="column"
        alignItems="center"
        justifyContent="space-between"
        gap={{ base: "1.1rem", lg: "2rem" }}
      >
        <Text
          fontWeight={800}
          fontSize={{ base: "1.75rem", lg: "2.25rem" }}
          textTransform={"uppercase"}
          fontFamily="'Antonio', sans-serif"
          textColor="#183B5D"
          alignSelf={{ base: "start", lg: "center" }}
        >
          serving the social needs of HK
        </Text>
        <Text
          fontWeight={400}
          fontSize="1.25rem"
          fontFamily="'Manrope', sans-serif"
        >
          We identified 10 key social needs in Hong Kong to guide our service
          efforts
        </Text>

        <Box
          display="flex"
          w={{ base: "100%", lg: "86%" }}
          justifyContent="center"
          px={{ base: "0" }}
        >
          <Grid
            templateColumns={{ base: "repeat(2,1fr)", lg: "repeat(5, 1fr)" }}
            gap={"4"}
          >
            <GridItem>
              {SocialNeedsDisplay(
                "images/social_needs/need_children.png",
                "CHILDREN",
                "#DAEDFA"
              )}
            </GridItem>
            <GridItem>
              {SocialNeedsDisplay(
                "images/social_needs/need_helpers.png",
                "DOMESTIC HELPERS",
                "#F9EEE3"
              )}
            </GridItem>
            <GridItem>
              {SocialNeedsDisplay(
                "images/social_needs/need_issues.png",
                "DOMESTIC ISSUES",
                "#DAEDFA"
              )}
            </GridItem>
            <GridItem>
              {SocialNeedsDisplay(
                "images/social_needs/need_elder.png",
                "ELDERLY",
                "#F9EEE3"
              )}
            </GridItem>
            <GridItem>
              {SocialNeedsDisplay(
                "images/social_needs/need_ethnic.png",
                "ETHNIC MINORITIES",
                "#DAEDFA"
              )}
            </GridItem>
            <GridItem>
              {SocialNeedsDisplay(
                "images/social_needs/need_disabled.png",
                "HANDICAPPED & DISABLED",
                "#F9EEE3"
              )}
            </GridItem>
            <GridItem>
              {SocialNeedsDisplay(
                "images/social_needs/need_environment.png",
                "ENVIRONMENTAL",
                "#DAEDFA"
              )}
            </GridItem>
            <GridItem>
              {SocialNeedsDisplay(
                "images/social_needs/need_poor.png",
                "POOR & HOMELESS",
                "#F9EEE3"
              )}
            </GridItem>
            <GridItem>
              {SocialNeedsDisplay(
                "images/social_needs/need_mental.png",
                "MENTAL HEALTH",
                "#DAEDFA"
              )}
            </GridItem>
            <GridItem>
              {SocialNeedsDisplay(
                "images/social_needs/need_income.png",
                "LOW INCOME FAMILIES",
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
