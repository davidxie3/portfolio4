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
		<Box
			h={NAVBAR_HEIGHT}
			position="relative"
			justify="center"
			align="center"
			bg={isAboutPage ? 'mainPurple.secondaryBG' : '#070707'}
			color={isAboutPage ? '#070707' : 'mainPurple.secondaryBG'}
		>
			<HStack w="100%" spacing={9}>
				<Accordion allowToggle>
					<AccordionItem border="none">
						<h2>
							<AccordionButton>
								<Box as="span" flex="1" textAlign="left">
									<NavButton name="Works" />
								</Box>
								<AccordionIcon />
							</AccordionButton>
						</h2>
						<AccordionPanel textAlign="left" position="absolute">
							<Stack>
								<Link to="/works">
									<NavButton variant="worksNavBar" name="PHOTOGRAPHY" />
								</Link>
								<Link to="/works">
									<NavButton variant="worksNavBar" name="DEVELOPMENT" />
								</Link>
								<Link to="/works">
									<NavButton variant="worksNavBar" name="DESIGN" />
								</Link>
							</Stack>
						</AccordionPanel>
					</AccordionItem>
				</Accordion>

				<NavButton name="Archive" />
				<Spacer />
				<Link to="/">
					<Text fontSize={72} letterSpacing="9%" fontFamily="EpiceneDisplayLightItalic">
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
		</Box>
	);
}
