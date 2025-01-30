import MainContainer from "./components/MainContainer";
import { LanguageProvider } from "./components/LanguageToggle";
import { ChakraProvider, Flex } from "@chakra-ui/react";
import theme from "./theme";
import "@fontsource/antonio/400.css";
import "@fontsource/antonio/700.css";
import "@fontsource/manrope/400.css";
import "@fontsource/manrope/700.css";
import "@fontsource/manrope/800.css";

const App = () => (
  <ChakraProvider theme={theme}>
    <LanguageProvider>
      <Flex flexGrow={1} display="flex" h="100vh" p="0" m="0">
        <MainContainer />
      </Flex>
    </LanguageProvider>
  </ChakraProvider>
);

export default App;
