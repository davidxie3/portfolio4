import { Text, Stack, Flex, Spacer } from '@chakra-ui/react';
import Project from '../components/Homepage/homepage-project';
import HomeList from '../components/Homepage/home-list';

function Home() {
	return (
		<>
			<Flex display="flex" alignItems="center" justifyContent="center" flexDirection="column">
				<Stack align="center" justify="center" spacing={4} h="100vh">
					<Text fontSize="6vw" color="mainPurple.primary" fontFamily="RomieRegular">
						CREATIVE TECHNOLOGIST
					</Text>
					<Text fontSize="6vw" color="mainPurple.primary" fontFamily="RomieRegular">
						PHOTOGRAPHER AND DESIGNER.
					</Text>
				</Stack>

				<Stack h="40vh" margin='4vw'>
					<Text fontSize="2vw" color="white" fontFamily="RomieRegular">
						Im David! I work as a Visual Developer specializing in the crafting of unique and striking
						digital experiences with strong beautiful and unique user experiences.
					</Text>
					<Spacer/>
					<Text fontSize="2vw" color="white" fontFamily="RomieRegular">
						I also love capturing the essence of the world around me through the lens photography and
						filmmaking.
					</Text>
					<Spacer/>
					<Text fontSize="2vw" color="white" fontFamily="RomieRegular">
						In short...
					</Text>
				</Stack>

				<Flex w="100%" flexDirection="column">
					<Project />
				</Flex>

				<HomeList />
			</Flex>
		</>
	);
}

export default Home;
