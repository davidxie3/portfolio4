import { Box, Flex, Image } from '@chakra-ui/react';

export default function HomepageProject() {
	return (
		<Box
			id="background"
			h="100vh"
			w="100vw"
			bgSize="cover"
			bgAttachment="fixed"
			bgGradient="linear(to-l, #7928CA, #FF0080)"
			margin={0}
			overflowY="hidden"
		>
			<Flex
				id="window"
				h="100%"
				w="100%"
				align="center"
				justify="center"
				flexDirection="column"
				position="relative"
                overflowY="scroll"
			>
				<Image
					src="src/assets/images/tiny-cropped-portrait.webp"
					position="absolute"
					top="50%"
					transform="translateY(-50%)"
				/>
				<Image
					src="src/assets/images/tiny-cropped-portrait.webp"
					position="absolute"
					top="150%"
					transform="translateY(-50%)"
				/>
			</Flex>
		</Box>
	);
}
