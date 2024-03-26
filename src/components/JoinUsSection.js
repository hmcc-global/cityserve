import { Text, VStack, Link, Button } from "@chakra-ui/react";

const JoinUsSection = () => {
  return (
    <VStack
      bgColor="#85B4DB"
      fontFamily="Gotham"
      textColor="#FFFFFF"
      w="100%"
      py="6"
      gap={0}
    >
      <Text fontSize={{ base: "10vw", sm: "5vw" }}>APRIL 6, 2025</Text>
      <Text fontSize={{ base: "5vw", sm: "4vw" }}>
        JOIN US AT CITYSERVE 2025
      </Text>
      <Button
        bgColor="#FFFCF3"
        textColor="#183B5D"
        fontFamily="Gotham"
        fontWeight="900"
        w={{ base: "40%", sm: "35%" }}
        h={{ base: "4em", sm: "2.6em" }}
        mt={{ base: "2" }}
        px={{ base: "4em", sm: "1em" }}
        textAlign="center"
        borderRadius={50}
        as={Link}
        target="_blank"
        fontSize={{ base: "1.3vw", sm: "1.3vw" }}
        href="https://forms.gle/UoAwhzPYqgkUsdcf6"
      >
        FILL OUT THIS FORM IF YOU ARE <br /> INTERESTED AND WANT TO KNOW MORE!{" "}
      </Button>
    </VStack>
  );
};

export default JoinUsSection;
