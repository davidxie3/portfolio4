import {
	Text,
	Spacer,
	Stack,
	Box,
	Accordion,
	AccordionItem,
	AccordionButton,
	AccordionPanel,
	AccordionIcon,
	HStack,
} from '@chakra-ui/react';
import { Link, useLocation } from 'react-router-dom';
import NavButton from './navbar-button';

const NAVBAR_HEIGHT = 100;

export default function NavBar() {
	const location = useLocation();
	const isAboutPage = location.pathname === '/about';

	return (
		<HStack
			h={NAVBAR_HEIGHT}
			bg={isAboutPage ? 'mainPurple.secondaryBG' : '#070707'}
			color={isAboutPage ? '#070707' : 'mainPurple.primary'}
			position="fixed"
			justify="center"
			align="center"
			w="100%"
			spacing={9}
		>
			{/* <Accordion allowToggle>
				<AccordionItem border="none">
					<h2>
						<AccordionButton>
							<Box as="span" flex="1" textAlign="left">
								<NavButton name="Works" />
							</Box>
							<AccordionIcon />
						</AccordionButton>
					</h2>
					<AccordionPanel textAlign="left" position="absolute" width="100%" zIndex="4">
						<Stack>
							<Link to="/works/photography">
								<NavButton variant="worksNavBar" name="PHOTOGRAPHY" />
							</Link>
							<Link to="/works/development">
								<NavButton variant="worksNavBar" name="DEVELOPMENT" />
							</Link>
							<Link to="/works/design">
								<NavButton variant="worksNavBar" name="DESIGN" />
							</Link>
						</Stack>
					</AccordionPanel>
				</AccordionItem>
			</Accordion> */}
			<Link to ="/works">
				<NavButton name="Works"></NavButton>
			</Link>
			<Link to="/archive">
				<NavButton name="Archive" />
			</Link>
			<Spacer />
			<Link to="/">
				<Text
					fontSize="3vw"
					letterSpacing="9%"
					fontFamily="EpiceneDisplayLightItalic"
				>
					{' '}
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
