import { HStack, Text, Link, Button, Img, VStack } from "@chakra-ui/react";
import React, { useState } from "react";

const Header = ({ recapRef, joinusRef }) => {
  const [isOpen, setIsOpen] = useState(false); // State to manage dropdown visibility

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const scrollToRecap = () => {
    if (recapRef.current) {
      recapRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToParticipate = () => {
    if (joinusRef.current) {
      joinusRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <VStack gap="0.4" background="black">
      <HStack
        w="100%"
        h="9vh"
        bgColor="#F8F8F8"
        paddingX={{ base: "5vw", md: "5vw", lg: "5vw", xl: "5vw" }}
        justifyContent="space-between"
        fontFamily="Manrope"
        letterSpacing="0.12em"
        fontWeight="800"
      >
        <Text
          fontFamily="Antonio"
          fontSize={{ base: "1.3rem", md: "1.8rem" }}
          textColor="#0053A4"
        >
          CITYSERVE
        </Text>

        {/* Desktop version */}
        <HStack
          w={{ md: "70%", lg: "60%" }}
          gap="2.5rem"
          display={{ base: "none", lg: "flex" }}
          justifyContent="end"
        >
          <Link onClick={scrollToRecap}>
            <Text fontSize="1rem">2024 RECAP</Text>
          </Link>
          <Link onClick={scrollToParticipate}>
            <Text fontSize="1rem" S>
              PARTICIPATE
            </Text>
          </Link>
          <Button
            bgColor="#1769B8"
            textColor="#F8F8F8"
            fontSize="1rem"
            fontWeight="800"
            href="https://forms.gle/UoAwhzPYqgkUsdcf6"
            as={Link}
            _hover={{ bg: "#183B5D", textDecor: "none" }}
            target="_blank"
            borderRadius="0.6rem"
          >
            2025 INTEREST FORM
          </Button>
          <HStack
            alignItems={"center"}
            fontFamily={"'Manrope', sans-serif"}
            fontWeight={800}
          >
            <Text>EN</Text>
            <Text> | </Text>
            <Text>繁</Text>
          </HStack>
        </HStack>

        {/* Mobile version */}
        <HStack
          display={{ base: "flex", lg: "none" }}
          w="25%"
          justifyContent="end"
        >
          <Button
            backgroundColor="transparent"
            onClick={toggleDropdown}
            variant="unstyled"
          >
            <Img
              src={process.env.PUBLIC_URL + "images/three_dots.svg"}
              boxSize={7}
              mr={2}
              my="auto"
            />
          </Button>
          <HStack
            alignItems={"center"}
            fontFamily={"'Manrope', sans-serif"}
            fontWeight={800}
            display={{ base: "flex", lg: "none" }}
          >
            <Text>EN</Text>
            <Text> | </Text>
            <Text>繁</Text>
          </HStack>
        </HStack>
      </HStack>

      <HStack
        w="100%"
        h="5vh"
        bgColor="#F8F8F8"
        paddingX="5vw"
        justifyContent="space-between"
        fontFamily="Manrope"
        letterSpacing="0.12em"
        fontWeight="800"
        display={isOpen ? "flex" : "none"}
      >
        <Link onClick={scrollToRecap}>
          <Text fontSize="0.7rem">2024 RECAP</Text>
        </Link>
        <Link onClick={scrollToParticipate}>
          <Text fontSize="0.7rem">PARTICIPATE</Text>
        </Link>
        <Button
          bgColor="#1769B8"
          textColor="#F8F8F8"
          fontSize="0.7rem"
          fontWeight="800"
          href="https://forms.gle/UoAwhzPYqgkUsdcf6"
          as={Link}
          target="_blank"
          borderRadius="0.6rem"
          h="70%"
        >
          2025 INTEREST FORM
        </Button>
      </HStack>
    </VStack>
  );
};

export default Header;
