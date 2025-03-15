import React, { forwardRef } from "react";

import {
  Text,
  VStack,
  Link,
  Button,
  Box,
  Image,
  HStack,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  ModalFooter,
} from "@chakra-ui/react";
import { useLanguage } from "./LanguageToggle";
import translations from "./Translation";

const JoinUsSection = forwardRef((props, ref) => {
  const { language } = useLanguage();
  const { isOpen, onOpen, onClose } = useDisclosure();

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
            {translations[language].joinUs.title}
          </Text>

          <Text
            fontFamily="Manrope"
            fontSize={{ base: "0.875rem", md: "1.25rem" }}
            fontWeight="400"
            textAlign="center"
          >
            {translations[language].joinUs.description}
            &nbsp;
            <Link
              href="https://linktr.ee/cityservehk"
              target="_blank"
              variant="underline"
              fontWeight="700"
              textDecoration="underline"
            >
              {translations[language].joinUs.link}
            </Link>
            .
          </Text>
        </VStack>
        <HStack w="100%" justifyContent="center" gap={{ base: "3", md: "9" }}>
          <Button
            bgColor="#DAEDFA"
            textColor="#183B5D"
            fontFamily="Manrope"
            fontWeight="900"
            fontSize={{ base: "0.8rem", lg: "1rem" }}
            letterSpacing="0.12rem"
            textAlign="center"
            borderRadius="0.625rem"
            height="3.125rem"
            width={{ base: "12rem", md: "17.5rem" }}
            as={Link}
            target="_blank"
            href="https://forms.gle/YREGhDijBayQaEea8"
            sx={{
              _hover: {
                textDecoration: "none",
                bg: "#1769B8", // Background color on hover
                color: "white", // Text color on hover
              },
            }}
          >
            {translations[language].joinUs.button_registration}
          </Button>
          <Button
            bgColor="#DAEDFA"
            textColor="#183B5D"
            fontFamily="Manrope"
            fontWeight="900"
            fontSize={{ base: "0.8rem", lg: "1rem" }}
            letterSpacing="0.12rem"
            textAlign="center"
            borderRadius="0.625rem"
            height="3.125rem"
            width={{ base: "12rem", md: "17.5rem" }}
            onClick={onOpen}
            sx={{
              _hover: {
                textDecoration: "none",
                bg: "#1769B8", // Background color on hover
                color: "white", // Text color on hover
              },
            }}
          >
            {translations[language].joinUs.button_giving}
          </Button>
          <Modal isOpen={isOpen} size={"xl"} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>
                <Text fontWeight="bold" fontFamily="Manrope">
                  GIVING
                </Text>
              </ModalHeader>
              <ModalCloseButton />
              <ModalBody fontFamily="Manrope">
                <Box>
                  <VStack
                    w="100%"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                    gap="0.5rem"
                  >
                    <Text>Giving can be done using either one of the:</Text>
                    <Text>
                      <b>1) Tithe.ly platform (Credit Card) </b> <br />
                      Click{" "}
                      <Link
                        style={{
                          textDecoration: "underline",
                        }}
                        href="https://tithe.ly/give_new/www/#/tithely/give-one-time/645349"
                        color="#319795"
                        target="_blank"
                      >
                        here
                      </Link>{" "}
                      to proceed with online credit card giving <br />{" "}
                    </Text>
                    <Text>
                      <b>2) Faster Payment System (FPS) </b> <br />
                      <HStack w="100%" gap="0">
                        <Text>
                          Name: HARVEST MISSION COMMUNITY CHURCH <br /> FPS ID:
                          167534304 <br />
                        </Text>
                        <Image
                          margin="auto"
                          src={process.env.PUBLIC_URL + "/images/FPSQR.png"}
                          boxSize="20%"
                        />
                      </HStack>{" "}
                    </Text>
                    <Text>
                      <b>3) Bank Transfer</b> <br />
                      Bank Name: China Construction Bank (Asia) Corporation
                      Limited <br />
                      Account Name: Harvest Mission Community Church (Hong Kong)
                      Limited <br />
                      Account Number: 013012090 <br />
                      <br />
                    </Text>
                    <Text fontStyle="italic">
                      &bull; If you are paying via <b>bank transfer or FPS</b>{" "}
                      please leave a note in the transfer remark in the
                      following format: CityServe: [FULLNAME]. If you are paying
                      via credit card on
                      <br />
                      &bull;Tithe.ly, the system will include a{" "}
                      <b>3.5% additional processing fee</b> for the transaction
                      so your total cost may be different than the listed
                      registration price.
                    </Text>
                  </VStack>
                </Box>
              </ModalBody>
              <ModalFooter></ModalFooter>
            </ModalContent>
          </Modal>
        </HStack>
      </VStack>
    </Box>
  );
});

export default JoinUsSection;
