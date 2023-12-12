import { Text, VStack, Link, Button } from "@chakra-ui/react";

const JoinUsSection = () => {
  return (
    <VStack
      bgColor="#85B4DB"
      fontFamily="Gotham"
      textColor="#FFFFFF"
      w="100%"
      py="6"
    >
      <Text fontSize="5vw">MARCH 17, 2024</Text>
      <Text fontSize="4vw">JOIN US AT CITYSERVE 2024</Text>
      <Button
        bgColor="#EFDDCB"
        textColor="#183B5D"
        fontFamily="Gotham"
        fontWeight="900"
        w="50%"
        px="1em"
        textAlign="center"
        borderRadius={20}
        as={Link}
        target="_blank"
        href="https://docs.google.com/forms/u/0/d/1JduNnwWHdwP_bFVqDRZpmNSCqBkPg8iQU90w0F4JMPA/viewform?pli=1&pli=1&edit_requested=true"
      >
        FILL OUT THIS FORM IF YOU ARE <br /> INTERESTED AND WANT TO KNOW MORE!{" "}
      </Button>
    </VStack>
  );
};

export default JoinUsSection;
