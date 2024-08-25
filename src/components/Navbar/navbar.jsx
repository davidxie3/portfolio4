import {
	Text,
	Spacer,
	HStack,
	Accordion,
	AccordionItem,
	AccordionButton,
	AccordionIcon,
	AccordionPanel,
	Stack,
	Box,
	Flex,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import NavButton from './navbar-button';

const NAVBAR_HEIGHT = 100;

export default function NavBar() {
	// Setting up the background color of the navbar
	const [backgroundColor, setBackgroundColor] = useState('mainPurple.primary');

	const location = useLocation();
	const isAboutPage = location.pathname === '/portfolio4/about';

	const handleScroll = () => {
		const scrollTop = window.scrollY;
		const scrollHeight = document.documentElement.scrollHeight;
		const clientHeight = window.innerHeight;
		const scrollRatio = scrollTop / (scrollHeight - clientHeight);

		if (scrollRatio > 0.1) {
			setBackgroundColor('white');
		} else {
			setBackgroundColor('mainPurple.primary');
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	// Fade on Accordion Panel
	const [isAccordionOpen, setIsAccordionOpen] = useState(false);

	const handleAccordionChange = (expandedIndex) => {
		setIsAccordionOpen(expandedIndex !== -1);
	};

	return (
		<>
			{/* Overlay that dims the background when the accordion is open */}
			{isAccordionOpen && (
				<motion.div
					// initial={{ opacity: 0, scale: 0.5 }}
					// animate={{ opacity: 1, scale: 1 }}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ ease: 'easeOut', duration: 0.5 }}
				>
					<Box
						position="fixed"
						top={NAVBAR_HEIGHT} // Start the overlay just below the navbar
						left={0}
						width="100%"
						height="100%"
						bg="rgba(8,0,18, 0.5)"
						zIndex={999} // Place it under the navbar but above other content
					/>
				</motion.div>
			)}

			{/* Animated solid rectangle
			{isAccordionOpen && (
				<motion.div
					initial={{ width: 0 }}
					animate={{ width: '100%' }}
					transition={{ ease: 'easeOut', duration: 0.5 }}
				>
					<Box
						position="fixed"
						top={NAVBAR_HEIGHT} // Positioned right under the navbar
						left={0}
						width="100%"
						height="45vh" // Adjust height as needed
						bgColor="black" // Solid color for the rectangle
						zIndex={999.5} // Above the overlay but below the navbar
					/>
				</motion.div>
			)} */}
			<HStack
				h={NAVBAR_HEIGHT}
				bg="rgba(52, 52, 52, 0.0)"
				color={isAboutPage ? '#000000' : backgroundColor}
				position="fixed"
				justify="center"
				align="center"
				w="100%"
				spacing={7}
				zIndex={1000} // Ensure the navbar stays on top
			>
				<Accordion allowToggle onChange={handleAccordionChange}>
					<AccordionItem border="none">
						<h2>
							<AccordionButton>
								<Box as="span" flex="1" textAlign="left">
									<NavButton name="Works" />
								</Box>
								<AccordionIcon />
							</AccordionButton>
						</h2>
						<AccordionPanel
							textAlign="left"
							position="absolute"
							bgColor={isAboutPage ? '#9747FF' : '#080012'}
							w="100%"
						>
							<Stack>
								<Link to="/portfolio4/photography">
									<NavButton variant="worksNavBar" name="PHOTOGRAPHY" fontSize="50px" />
								</Link>
								<Link to="/portfolio4/design">
									<NavButton variant="worksNavBar" name="DESIGN" fontSize="50px" />
								</Link>
								<Link to="/works">
									<NavButton variant="worksNavBar" name="DEVELOPMENT" fontSize="50px" />
								</Link>
							</Stack>
						</AccordionPanel>
					</AccordionItem>
				</Accordion>
				<Link to="/portfolio4/archive">
					<NavButton name="Archive" />
				</Link>
				<Spacer />

				<Flex direction="column" justify="center" align="center">
					<Text> x 澥峻涵 x </Text>
					<Link to="/portfolio4">
						<Text fontSize="3vw" letterSpacing="9%" fontFamily="RomieRegularItalic">
							David Xie
						</Text>
					</Link>
				</Flex>

				<Spacer />
				<Link to="/portfolio4/about">
					<NavButton name="About" />
				</Link>
				<NavButton name="Contact" />
			</HStack>
		</>
	);
}
