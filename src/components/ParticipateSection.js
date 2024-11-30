import {
	Text,
	Image,
	Container,
	Box,
	Tabs,
	TabList,
	Tab,
	TabPanels,
	TabPanel,
	Divider,
} from '@chakra-ui/react';

const ParticipateSection = () => {
	const InfoBox = (iconPath, title, subtitle, description, subdescription) => {
		return (
			<Box
				display="flex"
				flexDir="column"
				alignItems="center"
				justifyContent="center"
				p="1rem"
				w={{ base: '100%', lg: '32%' }}
				gap="0.75rem"
				minH="100%"
			>
				<Image
					src={process.env.PUBLIC_URL + 'images/participate/' + iconPath}
					minH="6rem"
					mb={'1rem'}
				/>

				<Text
					fontWeight={700}
					fontSize={{ base: '1.5rem', md: '1.75rem' }}
					fontFamily="'Antonio', sans-serif"
					textTransform={'uppercase'}
					textAlign={'center'}
					wordBreak="break-word"
					color="#183B5D"
				>
					{title}
				</Text>
				<Text
					fontWeight={800}
					fontSize={{ base: '0.875rem', md: '1rem' }}
					fontFamily="'Manrope', sans-serif"
					textTransform={'uppercase'}
					textAlign={'center'}
					wordBreak="break-word"
				>
					{subtitle}
				</Text>
				<Text
					fontWeight={400}
					fontSize={{ base: '0.875rem', md: '1.25rem' }}
					fontFamily="'Manrope', sans-serif"
					textAlign={'center'}
					wordBreak="break-word"
				>
					{description}
				</Text>
				<Text
					fontWeight={400}
					fontSize={{ base: '0.875rem', md: '1rem' }}
					fontFamily="'Manrope', sans-serif"
					textAlign={'center'}
					wordBreak="break-word"
				>
					{subdescription}
				</Text>
			</Box>
		);
	};

	return (
		<Container
			maxW="container.xl"
			px={0}
			pt="5rem"
			pb={{ base: '0', md: '5rem' }}
		>
			<Box
				display="flex"
				flexDirection={{ base: 'column', lg: 'row' }}
				py={0}
				px={{ base: '1rem', md: '2rem', lg: '3rem', xl: 0 }}
				maxW="100%"
				alignItems={{ base: 'flex-start', lg: 'center' }}
				justifyContent={{ base: 'center', lg: 'flex-start' }}
				gap={{ base: '1rem', lg: '10vw' }}
				mb={'4rem'}
			>
				<Text
					fontWeight={800}
					fontSize={{ base: '1.75rem', md: '2.25rem' }}
					textTransform={'uppercase'}
					maxW={{ base: '100%', lg: '35%' }}
					fontFamily="'Antonio', sans-serif"
				>
					How can YOU take part in CityServe this year?
				</Text>
				<Text
					fontWeight={400}
					fontSize={{ base: '0.875rem', md: '1.25rem' }}
					fontFamily="'Manrope', sans-serif"
					maxW={{ base: '100%', lg: '45%' }}
				>
					Whether you’re a church, an NGO, or charity, we have various avenues
					to have you take part in CityServe.
				</Text>
			</Box>

			<Box
				py={'1.25rem'}
				px={'1.375rem'}
				bgColor={'#DAEDFA'}
				borderRadius={{ base: 0, lg: '2rem' }}
			>
				<Tabs variant="unstyled" width="100%">
					<TabList
						width={'100%'}
						p={'0.25rem'}
						bg={'#FFFFFF'}
						borderRadius={'0.625rem'}
					>
						<Tab
							_selected={{ color: '#F9EEE3', bg: '#183B5D' }}
							borderRadius="0.625rem"
							color={'#183B5D'}
							textTransform={'uppercase'}
							flex={0.5}
							fontSize={{ base: '0.875rem', md: '1rem' }}
							fontWeight={800}
							fontFamily={'Manrope, sans-serif'}
						>
							FOR CHURCHES
						</Tab>
						<Tab
							_selected={{ color: '#F9EEE3', bg: '#183B5D' }}
							borderRadius="0.625rem"
							color={'#183B5D'}
							textTransform={'uppercase'}
							flex={0.5}
							fontSize={{ base: '0.875rem', md: '1rem' }}
							fontWeight={800}
							fontFamily={'Manrope, sans-serif'}
						>
							FOR NGOS / CHARITY
						</Tab>
					</TabList>
					<TabPanels>
						<TabPanel>
							<Box
								display="flex"
								flexDir="column"
								alignItems={'center'}
								justifyContent={'center'}
								mt={'1.25rem'}
							>
								<Text
									textTransform={'uppercase'}
									fontSize={{ base: '0.875rem', md: '1rem' }}
									fontFamily={'Manrope, sans-serif'}
									fontWeight="800"
									textAlign={'center'}
								>
									you may choose from the below 3 CITYSERVE MODEs to join in the movement:
								</Text>
								<Box
									display={'flex'}
									flexDir={{ base: 'column', lg: 'row' }}
									alignItems={{ base: 'flex-start', lg: 'flex-start' }}
									justifyContent={'center'}
									mt={'1.25rem'}
									gap={'1.5rem'}
								>
									{InfoBox(
										'participant.svg',
										'Participant',
										'',
										'Invite your members or small groups to join in a pre-planned event organized by CityServe Planning Committee. These members will be joined by participants from other churches to serve one of 10 social categories.',
										'Size of organization: Less than 50 people'
									)}
									<Divider
										orientation="vertical"
										borderColor="#183B5D"
										borderWidth={'1px'}
										minHeight={'300px'}
										display={{ base: 'none', lg: 'block' }}
									/>
									{InfoBox(
										'partner.svg',
										'partner',
										'',
										'CityServe Planning Committee will partner with your church to plan an event for your congregation. Connections and resources will be shared to empower your congregation for a serving experience during CityServe.',
										'Size of Organization: More than 50 people'
									)}
									<Divider
										orientation="vertical"
										borderColor="#183B5D"
										borderWidth={'1px'}
										minHeight={'300px'}
										display={{ base: 'none', lg: 'block' }}
									/>
									{InfoBox(
										'planner.svg',
										'Planner',
										'',
										'Plan within your church to create your own CityServe event with your network and connections to be a part of the movement.',
										'Size of Organization: No limit'
									)}
								</Box>
							</Box>
						</TabPanel>
						<TabPanel>
							<Box
								display="flex"
								flexDir="column"
								alignItems={'center'}
								justifyContent={'center'}
								mt={'1.25rem'}
							>
								<Text
									textTransform={'uppercase'}
									fontSize={{ base: '0.875rem', md: '1rem' }}
									fontFamily={'Manrope, sans-serif'}
									fontWeight={800}
									textAlign={'center'}
								>
									If you are an ngo or charity, you can:
								</Text>
								<Box
									display={'flex'}
									flexDir={{ base: 'column', lg: 'row' }}
									alignItems={{ base: 'flex-start', lg: 'center' }}
									justifyContent={'center'}
									mt={'1.25rem'}
									gap={'1.5rem'}
								>
									{InfoBox(
										'engage.svg',
										'Engage',
										'with the needy',
										'Engage with the needy by loving the city through different existing initiatives and activities.',
										''
									)}
									<Divider
										orientation="vertical"
										borderColor="#183B5D"
										borderWidth={'1px'}
										minHeight={'300px'}
										display={{ base: 'none', lg: 'block' }}
									/>
									{InfoBox(
										'empower.svg',
										'Empower',
										'churches and ministries',
										'Empower churches and ministries by providing participants a platform to serve the city together.',
										''
									)}
									<Divider
										orientation="vertical"
										borderColor="#183B5D"
										borderWidth={'1px'}
										minHeight={'300px'}
										display={{ base: 'none', lg: 'block' }}
									/>
									{InfoBox(
										'exhibit.svg',
										'Exhibit',
										"God's Work",
										'Exhibit God’s work by serving and caring for the unreached through CityServe.',
										''
									)}
								</Box>
							</Box>
						</TabPanel>
					</TabPanels>
				</Tabs>
			</Box>
		</Container>
	);
};

export default ParticipateSection;
