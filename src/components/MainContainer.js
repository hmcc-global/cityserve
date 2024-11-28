import React from "react";
import { chakra } from "@chakra-ui/react";
import HomeContainer from "./HomeContainer";
import Header from "./Header";
import Footer from "./Footer";

const MainContainer = () => {
  return (
    <chakra.main minH="100%" minW="100%" flex={1} id="main-container">
      <Header />
      <HomeContainer />
      <Footer />
    </chakra.main>
  );
};

export default MainContainer;
