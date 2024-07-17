import { Image, Text, Link } from '@chakra-ui/react';

export default function ProjectCard({ title, image, link }) {
	return (
		<Link href={link} isExternal>
			<Image src={image} alt={title} />
			<Text>{title}</Text>
		</Link>
	);
}
