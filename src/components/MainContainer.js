import React, { useRef } from "react";
import { chakra } from "@chakra-ui/react";

import HomeContainer from "./HomeContainer";
import Header from "./Header";
import Footer from "./Footer";

const MainContainer = () => {
  const recapRef = useRef(null);
  const participateRef = useRef(null);
  const joinusRef = useRef(null);

  return (
    <chakra.main minH="100%" minW="100%" flex={1} id="main-container">
      <Header recapRef={recapRef} joinusRef={joinusRef} />
      <HomeContainer
        recapRef={recapRef}
        joinusRef={joinusRef}
        participateRef={participateRef}
      />
      <Footer />
    </chakra.main>
  );
};

export default MainContainer;
