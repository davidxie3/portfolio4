import { Text, Stack, Flex } from '@chakra-ui/react';
import Project from '../components/homepage-project';
import HomeList from '../components/home-list';

function Home() {
	return (
		<>
			<Flex display="flex" alignItems="center" justifyContent="center" flexDirection="column">
				<Stack align="center" justify="center" spacing={4} h="100vh">
					<Text
						fontSize="6vw"
						color="mainPurple.primary"
						fontFamily="RomieRegular"
					>
						CREATIVE TECHNOLOGIST
					</Text>
					<Text
						fontSize="6vw"
						color="mainPurple.primary"
						fontFamily="RomieRegular"
					>
						PHOTOGRAPHER AND DESIGNER.
					</Text>
				</Stack>

				<Flex w="100%" flexDirection="column">
					<Project />
				</Flex>
				
				<HomeList/>			
			</Flex>
		</>
	);
}

export default Home;
