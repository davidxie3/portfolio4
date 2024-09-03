import { Box, List, ListItem, Flex } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function HomeList() {
	// Initial state to store the scroll position
	const [scrollY, setScrollY] = useState(0);

	// Array of items for the list
	const items = [
		{ name: 'Hoang Le' },
		{ name: 'Melcourses' },
		{ name: 'Portfolio' },
		{ name: 'Portfolio 1' },
		{ name: 'Portfolio 2' }
	];

	// Effect to track the scroll position
	useEffect(() => {
		const handleScroll = () => {
			setScrollY(window.scrollY);
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<Flex direction="column" align="center" justify="center" w="100vw" h="100vh">
			<Box position="absolute" h="80vh" w="60%">
				<List spacing="5vh" position="relative" top="10vh" >
					<ListItem
						color="white"
						fontSize="5vw"
						fontFamily="RomieRegularItalic"
						position="sticky"
						bg="rgba(0, 0, 0, 0.1)" // Background for better visibility
						zIndex="10"
					>
						{items[0].name}
					</ListItem>
					{items.slice(1).map((item, index) => (
						<ListItem
							color="white"
							key={index + 1}
							fontSize="5vw"
							fontFamily="RomieRegularItalic"
						>
							{item.name}
						</ListItem>
					))}
				</List>
			</Box>
		</Flex>
	);
}
