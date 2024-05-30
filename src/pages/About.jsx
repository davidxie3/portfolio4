import { Text, Flex } from '@chakra-ui/react';

function About() {
	return (
		<Flex
			h="calc(100vh - 90px)"
			bg="mainPurple.secondaryBG"
			display="flex"
			alignItems="flex-end"
			justifyContent="center"
		>
			<Text fontSize={435} color="#000000" fontFamily="EpiceneDisplayLightItalic" mb="-160px">
                About
			</Text>
		</Flex>
	);
}

export default About;
