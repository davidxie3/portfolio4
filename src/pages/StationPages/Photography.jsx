import { Box, Text, Flex, Image } from '@chakra-ui/react';

function PhotographyPage() {
	return (
		<Flex
			h="100vh"
			overflow="hidden"
			justify="center"
			align="center"
			position="relative"
		>
			<Text fontSize="3vw" position="relative" left="-30vw" top="-25vh">
				<Box as="span" color="white" fontFamily="RomieRegular">
					PHOTOGRAPHY
				</Box>{' '}
				<Box as="span" color="mainPurple.primary" fontFamily="RomieRegularItalic">
					↘
				</Box>
			</Text>
		</Flex>
	);
}

export default PhotographyPage;
