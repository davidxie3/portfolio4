import { Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
export default function ProjectCard({ title, image, link }) {
	return (
		<Link to={link}>
			<Image src={image} alt={title} />
		</Link>
	);
}
