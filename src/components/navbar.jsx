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
import { Link } from 'react-router-dom';
import NavButton from './navbar-button';

const NAVBAR_HEIGHT = 100;

export default function NavBar() {
	return (
		<Box h={NAVBAR_HEIGHT} position="relative" justify="center" align="center">
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
					<Text fontSize={72} color="mainPurple.primary" letterSpacing="9%" fontFamily="RomieRegularItalic">
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
