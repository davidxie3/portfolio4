import { Flex, Text } from '@chakra-ui/react';

function Works() {
	return (
		<Flex h="calc(100vh)" display="flex" alignItems="center" justifyContent="center" flexDirection="column">
			<Text
				fontSize="4vw"
				color="mainPurple.primary"
				fontFamily="RomieRegular"
			>
				↙ Works ↘
			</Text>
		</Flex>
	);
}

export default Works;
