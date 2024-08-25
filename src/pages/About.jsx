import { Box, Text, Flex, Image } from '@chakra-ui/react';
import portrait from '../assets/images/tiny-cropped-portrait.webp';

function About() {
	return (
		<Flex
			h="100vh"
			bg="mainPurple.secondaryBG"
			overflow="hidden" // IF WE EVER DECIDE TO EXPAND THE ABOUT PAGE, CHANGE SCROLL BEHAVIOR
			justify="center"
			position="relative"
		>
			<Box maxW="lg" position="absolute" w="30vw" top="30vh" left="5vw">
				<Text fontSize="1.5vw" color="#000000" fontFamily="RomieMedium">
					David Xie is a Visual Designer and Photographer, specializing in his versatility and eagerness to
					learn new mediums to express himself in. His work aims to capture the essence and raw emotion,
					transporting viewers to an exact moment in time.
				</Text>
			</Box>

			<Flex justify="center" align="center" >
				<Image maxW="25vw" src={portrait} />
			</Flex>

			<Box maxW="lg" position="absolute" w="30vw" top="30vh" right="5vw">
				<Text fontSize="1.5vw" color="#000000" fontFamily="RomieMedium">
					David Lives by the Phrase: Fuck Around and Find Out. How will you ever know whats the right move
					without trying? How can one improve without failure? If things dont go well, then we learn and move
					on. David lives by this phrase, and is always looking for new opportunities to hone his craft.
				</Text>
			</Box>
		</Flex>
	);
}

export default About;
