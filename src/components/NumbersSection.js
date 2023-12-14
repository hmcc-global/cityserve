import { Text, VStack, Box, HStack, Divider, Center } from "@chakra-ui/react";

const NumbersSection = () => {
  const titleNumber = (numbers, title) => {
    return (
      <VStack textAlign="center" w="100%" gap={0}>
        <Box
          w="50%"
          fontSize="13vw"
          fontFamily="Gotham"
          fontWeight="900"
          textColor="#EFDDCB"
        >
          {numbers}
        </Box>

        <Box
          w="50%"
          fontSize="3.5vw"
          fontFamily="Gotham-light"
          fontWeight="500"
          textColor="#EFDDCB"
          textAlign="center"
          h="min-content"
          lineHeight="80%"
        >
          {title}
        </Box>
      </VStack>
    );
  };

  return (
    <VStack py="5" w="100%" bgColor="#183B5D" alignContent="center" gap="0">
      <Box
        bgColor="#EFDDCB"
        textColor="#183B5D"
        fontFamily="Gotham"
        fontWeight="900"
        fontSize={{ base: "3vw", md: "1.7vw" }}
        px={{ base: "3", sm: "9" }}
        mb="5"
      >
        AT CITYSERVE 2023, WE SAW
      </Box>
      {/* pc-version */}
      <VStack display={{ base: "none", md: "flex" }} w="100%">
        <HStack
          w="100%"
          fontSize="9.5vw"
          fontFamily="Gotham"
          fontWeight="900"
          textColor="#EFDDCB"
          textAlign="center"
          gap="0"
        >
          <Box borderRightWidth="3px" w="25%" borderColor="#FFF9E8">
            218
          </Box>
          <Box borderRightWidth="3px" w="25%" borderColor="#FFF9E8">
            4
          </Box>
          <Box borderRightWidth="3px" w="25%" borderColor="#FFF9E8">
            4
          </Box>
          <Box w="25%">314</Box>
        </HStack>
        <HStack
          w="100%"
          fontSize="3vw"
          fontFamily="Gotham-light"
          fontWeight="500"
          textColor="#EFDDCB"
          textAlign="center"
          h="min-content"
          gap="0"
        >
          <Text w="25%">Participants</Text>
          <Text w="25%">Churches</Text>
          <Text w="25%">NGOs</Text>
          <Text w="25%" lineHeight="90%">
            people <br /> reached
          </Text>
        </HStack>
      </VStack>
      {/* mobile version */}
      <VStack w="100%" gap="0" display={{ base: "flex", md: "none" }}>
        <HStack w="100%" gap={0}>
          {titleNumber(218, "Participants")}
          <Center height="20vw">
            <Divider
              borderColor="#FFF9E8"
              orientation="vertical"
              borderWidth="2px"
            />
          </Center>
          {titleNumber(4, "Churches")}
        </HStack>
        <HStack w="100%" gap={0}>
          {titleNumber(4, "NGOs")}
          <Center height="20vw">
            <Divider
              borderColor="#FFF9E8"
              orientation="vertical"
              borderWidth="2px"
            />
          </Center>
          {titleNumber(
            314,
            <>
              people <br /> reached
            </>
          )}
        </HStack>
      </VStack>
    </VStack>
  );
};

export default NumbersSection;
