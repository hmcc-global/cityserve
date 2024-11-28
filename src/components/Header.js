import { HStack, Text, Link, Button } from "@chakra-ui/react";

const Header = () => {
  return (
    <HStack
      w="100%"
      h="9vh"
      bgColor="#F8F8F8"
      paddingX="8.5vw"
      justifyContent="space-between"
      fontFamily="Manrope"
      letterSpacing="0.10em"
      fontWeight="800"
    >
      <Text fontFamily="Antonio" fontSize="1.8em" textColor="#0053A4">
        CITYSERVE
      </Text>
      <HStack w="50%" justifyContent="space-between">
        <Link>
          <Text fontSize="1em" fontWeight="800">
            2024 RECAP
          </Text>
        </Link>
        <Link>
          <Text fontSize="1em" fontWeight="800">
            PARTICIPATE
          </Text>
        </Link>
        <Button
          bgColor="#1769B8"
          textColor="#F8F8F8"
          fontSize="1em"
          fontWeight="800"
          href="https://forms.gle/UoAwhzPYqgkUsdcf6"
          as={Link}
          target="_blank"
        >
          2025 INTEREST FORM
        </Button>
      </HStack>
    </HStack>
  );
};

export default Header;
