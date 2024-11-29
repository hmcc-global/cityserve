import { Text, VStack, AspectRatio, Stack, HStack, SimpleGrid, Image, Box, Center} from "@chakra-ui/react";

const cardsData = [
  {
    title: "PARTICIPANTS",
    number: "296",
    backgroundImage: process.env.PUBLIC_URL + "images/recap_participants_card.png",
    
  },
  {
    title: "CHURCHES",
    number: "8",
    backgroundImage: process.env.PUBLIC_URL + "images/recap_church_card.png",
  },
  {
    title: "NGOs",
    number: "8",
    backgroundImage: process.env.PUBLIC_URL + "images/recap_ngo_card.png",
  },
  {
    title: "PEOPLE REACHED",
    number: "584",
    backgroundImage: process.env.PUBLIC_URL + "images/recap_reached_card.png",
  },
];

const ReCap = () => {
  return (
    <VStack w="100%" 
      bgColor="#F9EEE3" 
      gap ="5" 
      p={{sm: "5rem"}}
      py={{base:"2.5rem"}}
      px={{base:"1.313rem"}}
      textColor="#183B5D"

    >
      <Text
        fontFamily="Antonio"
        fontWeight="700"
        fontSize={{ base: "1.75rem", lg: "2.25rem" }}
        textAlign="left"
      >
        A RECAP OF CITYSERVE 2024
      </Text>

      <Text
        fontFamily="Manrope"
        fontWeight="400"
        fontSize={{ base: "0.875rem", lg: "1.25rem" }}
        textAlign={{ base: "left", md:"center", lg: "center" }}
        marginX={{ lg:"15rem"}}
      >
        The 2024 CityServe took place on Sunday, March 17th. Churches, organizations, and participants came together to 
        serve the different needs of the city. Check out the video to learn more about what happened and how we saw God’s 
        love demonstrated throughout the city! 
      </Text>

      <Stack 
        direction={['column', 'row']} 
        w="100%" 
        marginTop={{ base: "1.313rem", sm:"0rem", lg: "2.5rem" }} 
      >
        <Center>
          <AspectRatio 
            width={{ base: "24rem", lg: "42rem" }}
            ratio={16 / 9} 
            marginLeft={{lg: "13rem"}}
          >
            <iframe
              title="video-embed"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              src="https://www.youtube.com/embed/wj7FnRB-0zk?si=5_1uy1aXIN_WIhMH"
            />
          </AspectRatio>
        </Center>
       
        <Center>
          <SimpleGrid 
            columns={{ base: 2, lg: 2 }} 
            spacing={{ base: "0.938rem", lg: "1.25rem" }}
            marginLeft={{sm: "1rem" }}
            marginTop={{ base: "1.621rem", lg: "0rem" }}
          >
            {cardsData.map((card) => (
              <Box
                width={{ base: "9.813rem",  md:"6rem", lg: "13.438rem" }}
                height={{ base: "8.188rem",  md:"7.125rem", lg: "11.25rem" }}
                alignItems="center"
                justifyContent="center"
                backgroundImage={card.backgroundImage}
                backgroundSize="contain"
              >
                <VStack p={{ base: "1rem", lg: "2rem" }}
                >
                  <Text 
                    fontFamily="Antonio"
                    fontSize={{ base: "2rem", sm:"2rem", lg: "2.75rem" }}
                    fontWeight="700"
                    textAlign="center"
                  >
                    {card.number}
                  </Text>
                  <Text 
                    fontFamily="Manrope"
                    fontSize={{ base: "0.875rem", sm:"0.5rem", lg: "1rem" }}
                    fontWeight="800"
                    textAlign="center"
                    letterSpacing="0.12rem"
                  >
                    {card.title}
                  </Text>
                </VStack>
              </Box>
            ))}  
          </SimpleGrid>
        </Center>
      </Stack>
    </VStack>
  );
};

export default ReCap;
