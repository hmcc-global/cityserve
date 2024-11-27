import { Text, VStack, AspectRatio, HStack, SimpleGrid, Image, Box} from "@chakra-ui/react";

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
      p="5rem"
      textColor="#183B5D"
    >
      <Text
        fontFamily="Antonio"
        fontWeight="700"
        fontSize={{ base: "3.5vw", sm: "2.25rem" }}
        textAlign="center"
      >
        A RECAP OF CITYSERVE 2024
      </Text>

      <Text
        fontFamily="Manrope"
        fontWeight="400"
        fontSize={{ base: "3.5vw", sm: "1.25rem" }}
        textAlign="center"
        marginX={{base:"3.5rem", xl:"9rem"}}
      >
        The 2024 CityServe took place on Sunday, March 17th. Churches, organizations, and participants came together to 
        serve the different needs of the city. Check out the video to learn more about what happened and how we saw God’s 
        love demonstrated throughout the city! 
      </Text>

      <HStack w="100%">
        <AspectRatio width="42rem" ratio={16 / 9} marginLeft="7rem">
          <iframe
            title="video-embed"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            src="https://www.youtube.com/embed/wj7FnRB-0zk?si=5_1uy1aXIN_WIhMH"
          />
        </AspectRatio>

        <SimpleGrid 
          columns={{ base: 2, md: 2 }} 
          spacing="1.25rem"
          marginLeft="1rem"
        >
          {cardsData.map((card) => (
            <Box
              width="13.438rem"
              height="11.25rem"
              alignItems="center"
              justifyContent="center"
              backgroundImage={card.backgroundImage}
            >
              <VStack p="2rem"
              >
                <Text 
                  fontFamily="Antonio"
                  fontSize={{ base: "1.75rem", md: "2.75rem" }}
                  fontWeight="700"
                  textAlign="center"
                >
                  {card.number}
                </Text>
                <Text 
                  fontFamily="Manrope"
                  fontSize={{ base: "1.75rem", md: "1rem" }}
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
      </HStack>
    </VStack>
  );
};

export default ReCap;
