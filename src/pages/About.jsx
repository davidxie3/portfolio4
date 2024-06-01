import { Box, Text, Flex, Image } from '@chakra-ui/react';

function About() {
	return (
		<Flex
			h="calc(100vh - 100px)"
			bg="mainPurple.secondaryBG"
			display="flex"
			overflow="hidden" // IF WE EVER DECIDE TO EXPAND THE ABOUT PAGE, CHANGE SCROLL BEHAVIOR
			justify="center"
			// BEHAVIOR FOR SCROLLBAR
			// overflow="scroll"
			// sx={{
			// 	/* Hide scrollbar for Chrome, Safari, and Opera */
			// 	'::-webkit-scrollbar': {
			// 		display: 'none',
			// 	},
			// 	/* Hide scrollbar for IE, Edge, and Firefox */
			// 	'-ms-overflow-style': 'none', /* IE and Edge */
			// 	'scrollbar-width': 'none', /* Firefox */
			// }}
		>
			<Box maxW="lg" position="absolute" top="250px" left="100px">
				<Text fontSize={24} color="#000000" fontFamily="RomieMedium" top>
					David Xie is a Visual Designer and Photographer, specializing in his versatility and eagerness to
					learn new mediums to express himself in. His work aims to capture the essence and raw emotion,
					transporting viewers to an exact moment in time.
				</Text>
			</Box>

			<Box position="absolute" top="150px" justify="center">
				<Image maxW="400px" src='src/assets/images/tiny-cropped-portrait.webp'></Image>
			</Box>

			<Flex align="flex-end" mb="-250px">
				<Text fontSize={535} color="#000000" fontFamily="RomieRegularItalic">
					About
				</Text>
			</Flex>
		</Flex>
	);
}

export default About;
