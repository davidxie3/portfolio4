import { List, ListItem, Image } from '@chakra-ui/react';
import picture4 from '../assets/images/melcourses-mockup.webp';

export default function HomeList() {
	return (
		<List >
			<ListItem width='100vw' height='100vh' >
				<Image src={picture4}>

                </Image>
			</ListItem>
			<ListItem>About</ListItem>
			<ListItem>Projects</ListItem>
			<ListItem>Contact</ListItem>
		</List>
	);
}
