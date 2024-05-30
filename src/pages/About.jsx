import { Text, Flex } from '@chakra-ui/react';

function About() {
	return (
		<Flex
			h="calc(100vh - 100px)"
			bg="mainPurple.secondaryBG"
			display="flex"
			alignItems="flex-end"
			justifyContent="center"
			overflow="hidden" // IF WE EVER DECIDE TO EXPAND THE ABOUT PAGE, CHANGE SCROLL BEHAVIOR

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
			<Text fontSize={435} color="#000000" fontFamily="EpiceneDisplayLightItalic" mb="-160px">
				About
			</Text>
		</Flex>
	);
}

export default About;
