import React from "react";
import { chakra, Image } from "@chakra-ui/react";

const MainContainer = () => {
  return (
    <chakra.main minH="100%" minW="100%" flex={1} id="main-container">
      <Image
        src={process.env.PUBLIC_URL + "images/cityserve_laptop.png"}
        display={["none", "block"]}
        objectFit="fill"
        w="100%"
        h="100%"
      />
      <Image
        src={process.env.PUBLIC_URL + "images/cityserve_mobile.png"}
        display={["block", "image"]}
        objectFit="fill"
        w="100%"
        h="100%"
      />
    </chakra.main>
  );
};

export default MainContainer;
