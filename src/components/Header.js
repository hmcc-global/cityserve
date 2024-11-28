import { HStack, Text, Link, Button, Img, VStack } from "@chakra-ui/react";
import React, { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage dropdown visibility

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <VStack gap="0.4" background="black">
      <HStack
        w="100%"
        h="9vh"
        bgColor="#F8F8F8"
        paddingX={{ base: "5vw", md: "5vw", lg: "8.5vw" }}
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
          w={{ md: "70%", lg: "50%" }}
          gap="2.5rem"
          display={{ base: "none", md: "flex" }}
        >
          <Link>
            <Text fontSize="1rem">2024 RECAP</Text>
          </Link>
          <Link>
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
            target="_blank"
            borderRadius="0.6rem"
          >
            2025 INTEREST FORM
          </Button>
        </HStack>

        {/* Mobile version */}
        <Button
          backgroundColor="transparent"
          onClick={toggleDropdown}
          variant="unstyled"
          display={{ base: "block", md: "none" }}
        >
          <Img
            src={process.env.PUBLIC_URL + "images/three_dots.svg"}
            boxSize={7}
            mr={2}
            my="auto"
          />
        </Button>
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
        <Link>
          <Text fontSize="0.7rem">2024 RECAP</Text>
        </Link>
        <Link>
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
