import { Flex, Text, Grid, GridItem } from '@chakra-ui/react';

import picture4 from '../assets/images/melcourses-mockup.webp';

function Works() {
	return (
		<Flex>
			<Flex h="calc(200vh)" w="25vw" display="flex" direction="column" align="center" justify="start">
				<Text
					position="sticky"
					fontSize="3.5vw"
					color="mainPurple.primary"
					fontFamily="RomieRegular"
					top="150"
					align="center"
				>
					↙ SELECTED ↘ WORKS
				</Text>
			</Flex>

			<Flex>
				<Grid mt="160" w="75vw" h='90%' templateColumns="repeat(2, 1fr)" gap={4}>
					<GridItem bg="blue" />
					<GridItem  bg="blue" />
					<GridItem  bg="blue" />
				</Grid>
			</Flex>
		</Flex>
	);
}

export default Works;
