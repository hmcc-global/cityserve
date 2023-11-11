import MainContainer from "./components/MainContainer";
import { ChakraProvider, Flex } from "@chakra-ui/react";

const App = () => (
  <ChakraProvider>
    <Flex flexGrow={1} display="flex" h="100vh" p="0" m="0">
      <MainContainer />
    </Flex>
  </ChakraProvider>
);

export default App;
