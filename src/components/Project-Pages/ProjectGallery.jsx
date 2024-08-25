import { useState } from 'react';
import { Flex, Text, Image, GridItem, Grid } from '@chakra-ui/react';

export default function ProjectGallery({ images, title }) {
	const [chosenIndex, setChosenIndex] = useState(0);

	const handleImageClick = (index) => {
		setChosenIndex(index);
	};

	return (
		<Flex h="100vh" w="100vw" id="container" justify="center" align="center">
			<Flex id="text-container" mb={4} w="21vw" fontSize="3.7vw" color="white" fontFamily="RomieRegular">
				<Text>{title}</Text>
			</Flex>

			<Flex id="Image-Container" direction="row" justify="center" align="center">
				<Flex justify="center" align="center" w="50vw" h="50vh" mb={4}>
					<Image src={images[chosenIndex].src} alt={`Chosen Image ${chosenIndex}`} maxW="100%" maxH="100%" />
				</Flex>

				<Grid templateColumns="repeat(auto-fill, minmax(150px, 1fr))" gap={6}>
					{images.map((image, index) => (
						<GridItem
							w="13vw"
							key={index}
							onClick={() => handleImageClick(index)}
							cursor="pointer"
							border={chosenIndex === index ? '2px solid white' : 'none'}
						>
							<Image src={image.src} alt={`Image ${index}`} />
						</GridItem>
					))}
				</Grid>
			</Flex>
		</Flex>
	);
}
