import {
	Link,
	Container,
	Text,
	Flex,
	Box,
	Spacer,
	HStack,
	Icon,
} from '@chakra-ui/react';
import { FaInstagram } from 'react-icons/fa6';
import { MdMailOutline } from 'react-icons/md';

const Footer = () => {
	return (
		<Box maxW="100vw" bgColor="#DAEDFA" p={0}>
			<Container maxW="container.xl" py="1rem" px={0}>
				<Flex
					display={'flex'}
					w="100%"
					direction={['column', 'row']}
					py={['0', '2em']}
					alignItems={['flex-start', 'center']}
				>
					<HStack alignItems={'center'} fontFamily={"'Manrope', sans-serif"} fontWeight={800}>
						<Text>EN</Text>
						<Text> | </Text>
						<Text>繁</Text>
					</HStack>
					<Spacer />
					<Text
						fontFamily="'Antonio', sans-serif"
						fontSize="1.25rem"
						fontWeight="700"
						textTransform="uppercase"
						color="#0053A4"
					>
						CITYSERVE HONG KONG
					</Text>
					<Spacer />
					<Text
						textAlign="center"
						color="#183B5D"
						fontSize="0.75rem"
						fontFamily="'Manrope', sans-serif"
						fontWeight="400"
					>
						© 2023-2024 Cityserve Hong Kong. All Rights Reserved.
					</Text>
					<Spacer />
					<HStack gap={'20px'} alignItems={'center'}>
						<HStack alignItems={'center'}>
							<Link href="https://www.instagram.com/cityservehk/">
								<Icon as={FaInstagram} color="#183B5D" boxSize={'20px'} />
							</Link>
							<Link
								color="#183B5D"
								fontSize="1rem"
								fontFamily="'Manrope', sans-serif"
								fontWeight="400"
								_hover={{ textDecoration: 'underline' }}
							>
								@cityservehk
							</Link>
						</HStack>
						<HStack alignItems={'center'}>
							<Link href="mailto:hongkong@hmcc.net">
								<Icon as={MdMailOutline} color="#183B5D" boxSize={'20px'} />
							</Link>
							<Link
								color="#183B5D"
								fontSize="1rem"
								fontFamily="'Manrope', sans-serif"
								fontWeight="400"
								wordBreak="break-word"
								href="mailto:cityserve@hongkong.hmcc.net"
							>
								cityserve@hongkong.hmcc.net
							</Link>
						</HStack>
					</HStack>
				</Flex>
			</Container>
		</Box>
	);
};
export default Footer;
