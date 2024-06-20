import picture1 from '../assets/images/hoangCropped.webp';
import picture2 from '../assets/images/Dormly.webp';
import picture3 from '../assets/images/angieDanceCompressed.webp';
import picture4 from '../assets/images/melcourses-mockup.webp';
import picture5 from '../assets/images/thanothii.webp';

import { Box, Flex, Image, Text } from '@chakra-ui/react';
import { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';

export default function HomepageProject() {
	const containerRef = useRef(null);

	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ['start start', 'end end'],
	});

	const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
	const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
	const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
	const scale7 = useTransform(scrollYProgress, [0, 1], [1, 7]);

	const pictures = [
		{
			src: picture1,
			scale: scale4,
		},
		{
			src: picture2,
			scale: scale5,
		},
		{
			src: picture3,
			scale: scale6,
		},
		{
			src: picture4,
			scale: scale7,
		},
		{
			src: picture5,
			scale: scale7,
		},
	];

	return (
		<Box ref={containerRef} className="container">
			<Box className="sticky" position="sticky">
				{pictures.map(({ src, scale }, index) => (
					<motion.div key={index} className="el" style={{ scale }}>
						<Flex className="imageContainer">
							<Image src={src} alt="Project Image" />
						</Flex>
					</motion.div>
				))}
			</Box>
		</Box>
	);
}
