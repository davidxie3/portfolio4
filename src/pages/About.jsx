import { Box, Text, Flex, Image } from '@chakra-ui/react';

function About() {
	return (
		<Flex
			h="100vh"
			bg="mainPurple.secondaryBG"
			overflow="hidden" // IF WE EVER DECIDE TO EXPAND THE ABOUT PAGE, CHANGE SCROLL BEHAVIOR
			justify="center"
			position="relative"
		>
			<Box maxW="lg" position="absolute" top="250px" left="100px">
				<Text fontSize="1.5vw" color="#000000" fontFamily="RomieMedium">
					David Xie is a Visual Designer and Photographer, specializing in his versatility and eagerness to
					learn new mediums to express himself in. His work aims to capture the essence and raw emotion,
					transporting viewers to an exact moment in time.
				</Text>
			</Box>

			<Box position="absolute" top="150px" left="calc(50% - 10vw)">
				<Image maxW="20vw" src='src/assets/images/tiny-cropped-portrait.webp' />
			</Box>

			<Flex
				position="absolute"
				bottom="-200"
				width="100%"
				justify="center"
				align="center"
				zIndex={0}
			> 
				<Text fontSize="35vw" color="#000000" fontFamily="RomieRegular">
					About 
				</Text>
			</Flex>
		</Flex>
	);
}

export default About;
