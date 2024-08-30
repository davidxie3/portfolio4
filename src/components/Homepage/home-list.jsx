import { List, ListItem } from '@chakra-ui/react';

export default function HomeList({ activeItemIndex }) {
	const items = [{ name: 'Hoang Le' }, { name: 'Melcourses' }];

	return (
		<List spacing="10vw">
			{items.map((item, index) => (
				<ListItem key={index} fontSize="5vw" fontFamily="RomieRegularItalic">
					{item.name}
				</ListItem>
			))}
		</List>
	);
}
