import {
	Text,
	VStack,
	Image,
	HStack,
	Icon,
	Container,
	Box,
	Flex,
} from '@chakra-ui/react';
import { FaGlobe } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';

const PartnersSection = () => {
	const PartnerDisplayBox = (imagePath, title) => {
		return (
			<Box
				display="flex"
				flexDir="column"
				alignItems="center"
				justifyContent="center"
				border="1px"
				borderRadius="10px"
				borderColor="#F8F8F8"
				boxShadow="0px 0px 3px 0px rgba(0, 0, 0, 0.2)"
				p="1.5rem"
				maxW="500px"
			>
				<Image src={process.env.PUBLIC_URL + imagePath} h="6rem" mb={'1rem'} />
				<Text
					fontWeight={800}
					fontSize="1rem"
					fontFamily="'Manrope', sans-serif"
					textTransform={'uppercase'}
					textAlign={'center'}
					wordBreak="break-word"
					maxW="250px"
				>
					{title}
				</Text>
			</Box>
		);
	};

	return (
		<Box maxW="100vw" bgColor="#FFFFFF" p={0}>
			<Container maxW="container.xl" px={0} py="5rem">
				<HStack
					p={0}
					maxW="100%"
					fontFamily="Gotham"
					display={{ base: 'none', sm: 'flex' }}
					alignItems="flex-start"
				>
					<VStack
						textColor="#183B5D"
						w="100%"
						px="5"
						gap="1rem"
						width={{ base: '100vw', lg: '20vw' }}
						alignItems="flex-start"
					>
						<Text
							fontWeight={800}
							fontSize="2.25rem"
							textTransform={'uppercase'}
						>
							Our Partners
						</Text>
						<Text
							fontWeight={400}
							fontSize="1.25rem"
							fontFamily="'Manrope', sans-serif"
						>
							Organizations and churches we have partnership with. Click on each
							card to learn more about them!
						</Text>
					</VStack>
					<Flex
						wrap={'wrap'}
						justifyContent={'flex-end'}
						textColor="#183B5D"
						flex={1}
						gap={'1rem'}
						maxW="100%"
					>
						{PartnerDisplayBox(
							'images/partnered_logo_2.png',
							'INNER CITY MINISTRIES'
						)}
						{PartnerDisplayBox(
							'images/partnered_logo_3.png',
							'hong kong church network for the poor'
						)}
						{PartnerDisplayBox(
							'images/christian_action.png',
							'christian action'
						)}
						{PartnerDisplayBox('images/manna.png', 'MANNA MINISTRY')}
						{PartnerDisplayBox('images/mothers_choice.png', "MOTHER'S CHOICE")}
						{PartnerDisplayBox('images/s&d.png', 'SONS & DAUGHTER HK')}
						{PartnerDisplayBox(
							'images/partnered_logo_5.png',
							'jesus the living god international ministry'
						)}
					</Flex>
				</HStack>
				{/* Mobile version */}
				<VStack display={{ base: 'flex', sm: 'none' }} pt="3">
					<Text fontWeight={700} fontSize="4vw" mb="3">
						PARTNERED WITH
					</Text>
					<HStack gap={0} paddingBottom={4}>
						<VStack w="100%" pl="3">
							<HStack justifyContent="center">
								<Image
									src={process.env.PUBLIC_URL + 'images/partnered_logo_2.png'}
									w="19%"
								/>
								<Image
									src={process.env.PUBLIC_URL + 'images/partnered_logo_3.png'}
									w="25%"
								/>
								<Image
									src={process.env.PUBLIC_URL + 'images/partnered_logo_4.png'}
									w="27%"
								/>
								<Image
									src={process.env.PUBLIC_URL + 'images/partnered_logo_5.png'}
									w="17%"
								/>
							</HStack>
							{/* <Text fontWeight={700} fontSize="4vw">
              NGOs
            </Text> */}
						</VStack>
						{/* <VStack w="60%">
            <HStack justifyContent="center">
              <Image
                src={process.env.PUBLIC_URL + "images/partnered_logo_5.png"}
                w="12%"
              />
              <Image
                src={process.env.PUBLIC_URL + "images/partnered_logo_6.png"}
                w="12%"
              />
              <Image
                src={process.env.PUBLIC_URL + "images/partnered_logo_7.jpg"}
                w="12%"
              />
              <Image
                src={process.env.PUBLIC_URL + "images/partnered_logo_1.jpg"}
                w="33%"
              />
            </HStack>
            <Text fontWeight={700} fontSize="4vw">
              Churches
            </Text>
          </VStack> */}
					</HStack>
					<VStack w="100%" textColor="#FFFFFF" bgColor="#183B5D" gap="0" pb="9">
						<Text fontWeight={600} fontSize="5vw">
							Contact Us
						</Text>
						<Text fontFamily="Gotham-light" fontWeight={100} fontSize="2vw">
							if you are interested or if you have any questions!
						</Text>
						<HStack gap={1} pt="2">
							<Icon
								target="_blank"
								bgColor="transparent"
								fgColor="white"
								as={FaInstagram}
								boxSize={3}
								url="https://www.instagram.com/cityservehk/"
							/>
							<Text fontSize="2vw">@cityservehk</Text>
						</HStack>
						<HStack gap={1}>
							<Icon
								target="_blank"
								network="website"
								as={FaGlobe}
								boxSize={3}
								url="https://www.cityservehk.org"
							/>
							<Text fontSize="2vw">cityservehk.org</Text>
						</HStack>
						<HStack gap={1}>
							<Icon
								target="_blank"
								bgColor="transparent"
								fgColor="white"
								as={AiOutlineMail}
								boxSize={3}
								network="email"
								url="mailto:cityserve@hongkong.hmcc.net"
							/>
							<Text fontSize="2vw">cityserve@hongkong.hmcc.net</Text>
						</HStack>
					</VStack>
				</VStack>
			</Container>
		</Box>
	);
};

export default PartnersSection;
