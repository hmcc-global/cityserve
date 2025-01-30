import { HStack, Text } from "@chakra-ui/react";
import { useState, createContext, useContext } from "react";

const LanguageContext = createContext();

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");

  const toggleLanguage = (lang) => {
    setLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <HStack
      alignItems="center"
      justifyContent="center"
      fontFamily="'Manrope', sans-serif"
      fontWeight={800}
      color="#183B5D"
      fontSize={{ base: "0.875rem", md: "1rem" }}
    >
      <Text
        fontWeight={language === "en" ? "800" : "400"}
        cursor="pointer"
        onClick={() => toggleLanguage("en")}
        _hover={{ color: "#183B5D" }}
      >
        EN
      </Text>
      <Text> | </Text>
      <Text
        fontWeight={language === "zh" ? "800" : "400"}
        cursor="pointer"
        onClick={() => toggleLanguage("zh")}
        _hover={{ color: "#183B5D" }}
      >
        繁
      </Text>
    </HStack>
  );
};

export default LanguageToggle;
