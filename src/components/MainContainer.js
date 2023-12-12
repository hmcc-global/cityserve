import React from "react";
import { chakra } from "@chakra-ui/react";
import HomeContainer from "./HomeContainer";

const MainContainer = () => {
  return (
    <chakra.main minH="100%" minW="100%" flex={1} id="main-container">
      <HomeContainer />
    </chakra.main>
  );
};

export default MainContainer;
