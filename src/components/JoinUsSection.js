import React, { forwardRef } from "react";

import { Text, VStack, Link, Button, Box, Image } from "@chakra-ui/react";

const JoinUsSection = forwardRef((props, ref) => {
  return (
    <Box
      ref={ref}
      position="relative"
      width="100%"
      height={{ base: "60vh", md: "55vh", lg: "48vh" }}
      bgColor="#183B5D"
    >
      <Image
        src={process.env.PUBLIC_URL + "images/join_us_bg.png"}
        objectFit={{ base: "cover", xl: "contain" }}
        objectPosition="center bottom"
        width="100%"
        height="100%"
        position="absolute"
      />
      <VStack
        textColor="#FFFFFF"
        w="100%"
        gap={10}
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
      >
        <VStack gap={"2rem"} marginX={{ base: "3.5rem", xl: "22.5rem" }}>
          <Text
            fontFamily="Antonio"
            fontSize={{ base: "1.75rem", md: "2.25rem" }}
            fontWeight="700"
            textAlign="center"
          >
            JOIN US IN CITYSERVE 2025
          </Text>

          <Text
            fontFamily="Manrope"
            fontSize={{ base: "0.875rem", md: "1.25rem" }}
            fontWeight="400"
            textAlign="center"
          >
            If you would like to take part in CityServe 2025 or if you have any
            questions, indicate your interest in the form below or contact us
            &nbsp;
            <Link
              href="https://linktr.ee/cityservehk"
              target="_blank"
              variant="underline"
              fontWeight="700"
              textDecoration="underline"
            >
              here
            </Link>
            .
          </Text>
        </VStack>

        <Button
          bgColor="#DAEDFA"
          textColor="#183B5D"
          fontFamily="Manrope"
          fontWeight="900"
          fontSize={{ base: "0.875rem", lg: "1rem" }}
          letterSpacing="0.12rem"
          textAlign="center"
          borderRadius="0.625rem"
          height="3.125rem"
          width="16.25rem"
          as={Link}
          target="_blank"
          href="https://forms.gle/UoAwhzPYqgkUsdcf6"
          sx={{
            _hover: {
              textDecoration: "none",
              bg: "#1769B8", // Background color on hover
              color: "white", // Text color on hover
            },
          }}
        >
          2025 INTEREST FORM
        </Button>
      </VStack>
    </Box>
  );
});

export default JoinUsSection;
