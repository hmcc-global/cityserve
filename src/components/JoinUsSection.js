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
        w={{ base: "60%", sm: "50%" }}
        h={{ base: "4em" }}
        mt={{ base: "2" }}
        px={{ base: "4em", sm: "1em" }}
        textAlign="center"
        borderRadius={50}
        as={Link}
        target="_blank"
        fontSize={{ base: "2vw", sm: "1.5vw" }}
        href="https://docs.google.com/forms/u/0/d/1JduNnwWHdwP_bFVqDRZpmNSCqBkPg8iQU90w0F4JMPA/viewform?pli=1&pli=1&edit_requested=true"
      >
        FILL OUT THIS FORM IF YOU ARE <br /> INTERESTED AND WANT TO KNOW MORE!{" "}
      </Button>
    </VStack>
  );
};

export default JoinUsSection;
