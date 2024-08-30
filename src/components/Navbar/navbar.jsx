import {
	Text,
	Spacer,
	HStack,
	Drawer,
	DrawerBody,
	DrawerOverlay,
	DrawerContent,
	Box,
	Button,
	Flex,
	Stack,
	useDisclosure,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import NavButton from './navbar-button';

const MotionDrawerContent = motion(DrawerContent);

const NAVBAR_HEIGHT = 100;

export default function NavBar() {
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

	const { isOpen, onOpen, onClose } = useDisclosure();

	// Function to toggle drawer open/close
	const toggleDrawer = () => {
		if (isOpen) {
			onClose();
		} else {
			onOpen();
		}
	};

	return (
		<>
			{isOpen && (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ ease: 'easeOut', duration: 0.5 }}
				>
					<Box
						position="fixed"
						top={NAVBAR_HEIGHT}
						left={0}
						width="100%"
						height="100%"
						bg="rgba(8,0,18, 0.5)"
						zIndex={999}
					/>
				</motion.div>
			)}

			<HStack
				h={NAVBAR_HEIGHT}
				bg="rgba(52, 52, 52, 0.0)"
				color={isAboutPage ? '#000000' : backgroundColor}
				position="fixed"
				justify="center"
				align="center"
				w="100%"
				spacing={7}
				zIndex={11000}
			>
				{/* Toggle drawer on button click */}
				<Button onClick={toggleDrawer}>
					<NavButton name="Works" />
				</Button>

				<Drawer isOpen={isOpen} placement="top" onClose={onClose} blockScrollOnMount={true}>
					<DrawerOverlay zIndex={500} />
					<MotionDrawerContent
						initial={{ y: '{NAVBAR_HEIGHT}' }}
						animate={{ y: 0 }}
						exit={{ y: '-100%' }}
						transition={{
							duration: 1,
							ease: [.79, .13, .2, .97],
						}}
						bgColor={isAboutPage ? '#9747FF' : '#080012'}
						pt={`${NAVBAR_HEIGHT}px`}
						zIndex={500}
					>
						<DrawerBody padding={'30px'}>
							<Stack>
								<Link to="/portfolio4/photography" onClick={onClose}>
									<NavButton variant="worksNavBar" name="PHOTOGRAPHY" fontSize="50px" />
								</Link>
								<Link to="/portfolio4/design" onClick={onClose}>
									<NavButton variant="worksNavBar" name="DESIGN" fontSize="50px" />
								</Link>
								<Link to="/works" onClick={onClose}>
									<NavButton variant="worksNavBar" name="DEVELOPMENT" fontSize="50px" />
								</Link>
							</Stack>
						</DrawerBody>
					</MotionDrawerContent>
				</Drawer>

				{/* Close the drawer when any other button is clicked */}
				<Link to="/portfolio4/archive" onClick={onClose}>
					<NavButton name="Archive" />
				</Link>
				<Spacer />

				<Flex direction="column" justify="center" align="center">
					<Text> x 澥峻涵 x </Text>
					<Link to="/portfolio4" onClick={onClose}>
						<Text fontSize="3vw" letterSpacing="9%" fontFamily="RomieRegularItalic">
							David Xie
						</Text>
					</Link>
				</Flex>

				<Spacer />
				<Link to="/portfolio4/about" onClick={onClose}>
					<NavButton name="About" />
				</Link>
				<Link to="/portfolio4/contact" onClick={onClose}>
					<NavButton name="Contact" />
				</Link>
			</HStack>
		</>
	);
}
