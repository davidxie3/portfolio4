import { Flex, Text } from '@chakra-ui/react';
import ProjectGallery from '../../components/Project-Pages/ProjectGallery';

import picture1 from '../../assets/images/hoangCropped.webp';
import picture2 from '../../assets/images/Dormly.webp';
import picture3 from '../../assets/images/angieDanceCompressed.webp';
import picture4 from '../../assets/images/melcourses-mockup.webp';
import picture5 from '../../assets/images/thanothii.webp';
import picture6 from '../../assets/images/new-punks-yell.webp';
import picture7 from '../../assets/images/paper.webp';

function HoangLe() {
	const images = [
		{
			src:picture1
		},
		{
			src:picture2
		},
	];
	
	return (
		<Flex>
			<ProjectGallery title="Hoang Le" images={images} />
		</Flex>
	);
}

export default HoangLe;
