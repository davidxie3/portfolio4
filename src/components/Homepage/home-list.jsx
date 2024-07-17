import { List, ListItem, Image } from '@chakra-ui/react';
import picture4 from '../../assets/images/melcourses-mockup.webp';
import picture1 from '../../assets/images/hoangCropped.webp';

export default function HomeList() {
	return (
		<List >
			<ListItem fontSize="5vw" fontFamily="RomieRegularItalic"color={"white"}>Hoang Le</ListItem>
			<ListItem>Projects</ListItem>
			<ListItem>Contact</ListItem>
		</List>
	);
}
