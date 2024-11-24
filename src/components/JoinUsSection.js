import { Text, VStack, Link, Button, Container, Box, Image, Center } from "@chakra-ui/react";

const JoinUsSection = () => {
  return (
    <Box 
      position="relative" 
      width="100%" 
      height="50vh"
      bgColor="#183B5D"
    >
    <Image
      src={process.env.PUBLIC_URL + "images/join_us_bg.png"}
      objectFit="contain"
      objectPosition= "center bottom"
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
      <VStack gap={2}>
        <Text 
          fontFamily="Antonio"
          fontSize="2.25rem"
          fontWeight="700"
          textAlign="center"
        >
          JOIN US IN CITYSERVE 2025
        </Text>
        
        <Text 
          fontFamily="Manrope"
          fontSize="1rem"
          fontWeight="400"
          textAlign="center"
        >
          If you would like to take part in CityServe 2025 or if you have any questions, <br></br>
          indicate your interest in the form below or contact us here.
        </Text>
      </VStack>
      

      <Button
        bgColor="#DAEDFA"
        textColor="#183B5D"
        fontFamily="Manrope"
        fontWeight="900"
        fontSize="1rem"
        letterSpacing="0.12rem"
        textAlign="center"
        borderRadius="0.625rem"
        height="3.125rem"
        width="16.25rem"
        as={Link}
        target="_blank"
        href="https://forms.gle/UoAwhzPYqgkUsdcf6"
      >
        2025 INTEREST FORM
      </Button>
    </VStack>
  </Box>
  );
};

export default JoinUsSection;
