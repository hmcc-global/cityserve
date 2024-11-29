import React, { useRef } from "react";
import { chakra } from "@chakra-ui/react";

import HomeContainer from "./HomeContainer";
import Header from "./Header";

const MainContainer = () => {
  const recapRef = useRef(null);
  const participateRef = useRef(null);

  return (
    <chakra.main minH="100%" minW="100%" flex={1} id="main-container">
      <Header recapRef={recapRef} participateRef={participateRef} />
      <HomeContainer recapRef={recapRef} participateRef={participateRef} />
    </chakra.main>
  );
};

export default MainContainer;
