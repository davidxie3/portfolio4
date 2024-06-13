import { Text, Stack, Flex } from '@chakra-ui/react';
import Project from '../components/homepage-project';

function Home() {
	return (
		<>
			<Flex display="flex" alignItems="center" justifyContent="center" flexDirection="column" overflowY="hidden">
				<Stack align="center" justify="center" spacing={4} h="100vh">
					<Text
						fontSize={{ base: '36px', sm: '48px', md: '60px', lg: '96px' }}
						color="mainPurple.primary"
						fontFamily="RomieRegular"
					>
						VISUAL STORYTELLER
					</Text>
					<Text
						fontSize={{ base: '24px', md: '48px', lg: '84px' }}
						color="mainPurple.primary"
						fontFamily="RomieRegular"
					>
						CREATIVE DEVELOPER, PHOTOGRAPHER.
					</Text>
				</Stack>

				<Flex w="100%" flexDirection="column"  >
					<Project />
				</Flex>
			</Flex>
		</>
	);
}

export default Home;
