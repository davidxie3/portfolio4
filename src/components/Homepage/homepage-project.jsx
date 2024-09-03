import { Box, Flex, Image, Text } from '@chakra-ui/react';
import { useRef, useState, useEffect } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';

import HomeList from './home-list';

import picture1 from '../../assets/images/hoangCropped.webp';
import picture2 from '../../assets/images/Dormly.webp';
import picture3 from '../../assets/images/angieDanceCompressed.webp';
import picture4 from '../../assets/images/melcourses-mockup.webp';
import picture5 from '../../assets/images/thanothii.webp';
import picture6 from '../../assets/images/new-punks-yell.webp';
import picture7 from '../../assets/images/paper.webp';

export default function HomepageProject() {
	const containerRef = useRef(null);

	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ['start 0.4', 'end end'],
	});

	const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
	const scale5 = useTransform(scrollYProgress, [0, 1], [1, 4]);
	const scale6 = useTransform(scrollYProgress, [0, 1], [1, 5]);
	const scale7 = useTransform(scrollYProgress, [0, 1], [1, 6]);
	const scale8 = useTransform(scrollYProgress, [0, 1], [1, 7]);
	const scale9 = useTransform(scrollYProgress, [0, 1], [1, 4.5]);

	const textScale = useTransform(scrollYProgress, [0, 1], [1, 5]);

	// Trigger for project list appearance
	const listOpacity = useTransform(scrollYProgress, [0.9, 1], [0, 1]);
	const listY = useTransform(scrollYProgress, [0.9, 1], [50, 0]); // Moves from bottom to center

	const pictures = [
		{ src: picture1, scale: scale4 },
		{ src: picture2, scale: scale5 },
		{ src: picture3, scale: scale6 },
		{ src: picture4, scale: scale7 },
		{ src: picture5, scale: scale7 },
		{ src: picture6, scale: scale8 },
		{ src: picture7, scale: scale9 },
	];

	return (
		<Box ref={containerRef} className="container" >
			<Box className="sticky" position="sticky" >
				{pictures.map(({ src, scale }, index) => (
					<motion.div key={index} className="el" style={{ scale }}>
						<Flex className="imageContainer">
							<Image src={src} alt="Project Image" />
						</Flex>
					</motion.div>
				))}
				<motion.div left="200px" className="el" style={{ scale: textScale }}>
					<Text w="21vw" fontSize="1.6vw" color="white" position="relative" left="-260px">
						<Box as="span" fontFamily="RomieRegular">
							I design and craft digital experiences that capture the magic of the
						</Box>{' '}
						<Box as="span" fontFamily="RomieRegularItalic">
							moment.
						</Box>
					</Text>
				</motion.div>

				{/* Project list */}
				<motion.div
					style={{
						opacity: listOpacity,
						y: listY,
						position: 'relative',
						height: '135vh', // Adjust this to move the list closer to the bottom
						width: '100vw', // Adjust the width as necessary, or you can set a specific width
						display: 'flex',
						justifyContent: 'center', // Center horizontally within the div
						alignItems: 'center', // Center vertically within the div
						textAlign: 'center',
					}}
				>
					<HomeList />
				</motion.div>
			</Box>
		</Box>
	);
}
