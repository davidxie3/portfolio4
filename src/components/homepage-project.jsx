import { Box, Flex, Image, Text } from '@chakra-ui/react';
import picture1 from '../assets/images/hoangCropped.webp';
import picture2 from '../assets/images/Dormly.webp';
import picture3 from '../assets/images/angieDanceCompressed.webp';
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
	];

	const positionStyles = [
		{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '15vw' }, // hoang
		{ top: '17.5vh', left: '35vw', width: '10vw' }, // Dormly
		{ top: '4vh', right: '34vw', width: '7vw' }, // Angie
	];

	return (
		<Box ref={containerRef} className="container" position="relative" height="500vh" bgColor='blue'	>
			<Text
				fontSize={{ base: '24px', md: '48px', lg: '60px' }}
				color="mainPurple.primary"
				fontFamily="RomieRegular"
			>
				I create digital experiences that capture the energy of the moment.
			</Text>
			<Box className="sticky" position="sticky" height="100vh" top="0px">
				{pictures.map(({ src, scale }, index) => (
					<Flex
						key={index}
						className="element"
						align="center"
						justify="center"
						h="100%"
						w="100%"
						position="absolute"
						top="0"
						style={positionStyles[index]}
					>
						<motion.div
							style={{ scale }}
							className="imageContainer"
							width="25vw"
							height="25vw"
							position="relative"
							overflowX="hidden"
						>
							<Image
								src={src}
								alt="Project Image"
								_placeholder="blur"
								objectFit="cover"
							/>
						</motion.div>
					</Flex>
				))}
			</Box>
		</Box>
	);
}
