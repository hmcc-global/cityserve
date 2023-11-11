import React from "react";
import { chakra, Image } from "@chakra-ui/react";

const MainContainer = () => {
  return (
    <chakra.main minH="100%" minW="100%" flex={1} id="main-container">
      <Image
        src={process.env.PUBLIC_URL + "images/city-serve.jpeg"}
        objectFit="fill"
        w="100%"
        h="100%"
      />
    </chakra.main>
  );
};

export default MainContainer;
