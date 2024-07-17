import { Text, Spacer, HStack } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import NavButton from './navbar-button';

const NAVBAR_HEIGHT = 100;

export default function NavBar() {
	const [backgroundColor, setBackgroundColor] = useState('mainPurple.primary');
	const location = useLocation();
	const isAboutPage = location.pathname === '/about';

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

	return (
		<HStack
			h={NAVBAR_HEIGHT}
			bg="rgba(52, 52, 52, 0.0)"
			color={isAboutPage ? '#000000' : backgroundColor}
			position="fixed"
			justify="center"
			align="center"
			w="100%"
			spacing={9}
			zIndex={1000}
		>
			<Link to="/works">
				<NavButton name="Works" />
			</Link>
			<Link to="/archive">
				<NavButton name="Archive" />
			</Link>
			<Spacer />
			<Link to="/portfolio4">
				<Text fontSize="3vw" letterSpacing="9%" fontFamily="RomieRegularItalic">
					David Xie
				</Text>
			</Link>
			<Spacer />
			<Link to="/about">
				<NavButton name="About" />
			</Link>
			<NavButton name="Contact" />
		</HStack>
	);
}
