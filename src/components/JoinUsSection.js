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
      <Text fontSize={{ base: "10vw", sm: "5vw" }}>MARCH 17, 2024</Text>
      <Text fontSize={{ base: "5vw", sm: "4vw" }}>
        JOIN US AT CITYSERVE 2024
      </Text>
      <Button
        bgColor="#FFFCF3"
        textColor="#183B5D"
        fontFamily="Gotham"
        fontWeight="900"
        w={{ base: "34%", sm: "35%" }}
        h={{ base: "3em", sm: "2.4em" }}
        mt={{ base: "2" }}
        px={{ base: "4em", sm: "1em" }}
        textAlign="center"
        borderRadius={50}
        as={Link}
        target="_blank"
        fontSize={{ base: "2.3vw", sm: "2vw" }}
        href="https://bit.ly/CityServe2024"
      >
        SIGN UP NOW!{" "}
      </Button>
    </VStack>
  );
};

export default JoinUsSection;
