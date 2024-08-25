import { Flex, Text, Grid, GridItem } from '@chakra-ui/react';
import ProjectCard from '../components/ProjectCard';

import Melcourses from '../assets/images/melcourses-mockup.webp';
import NewPunksYell from '../assets/images/new-punks-yell.webp';
import HoangLe from '../assets/images/hoangCropped.webp';

import Dormly from '../assets/images/Dormly.webp';
import Angie from '../assets/images/angieDanceCompressed.webp';
import picture7 from '../assets/images/paper.webp';

function Works() {
	const projects = [
		{
			title: "Melcourses",
			image: Melcourses,
			link: "/portfolio4/works/HoangLe",
		},
		{
			title: "RPM New Punks",
			image: NewPunksYell,
			link: "/portfolio4/works/Melcourses",
		},
		{
			title: "Hoang Le",
			image: HoangLe,
			link: "/portfolio4/works/Melcourses",
		},
		{
			title: "Angie",
			image: Angie,
			link: "/portfolio4/works/Melcourses",
		},
	];

	return (
		<Flex>
			<Flex h="calc(200vh)" w="25vw" display="flex" direction="column" align="center" justify="start">
				<Text
					position="sticky"
					fontSize="3.5vw"
					color="mainPurple.primary"
					fontFamily="RomieRegular"
					top="150"
					align="center"
				>
					↙ SELECTED ↘ WORKS
				</Text>
			</Flex>

			<Flex>
				<Grid mt="160" w="70vw" h='2vh' templateColumns="repeat(2, 1fr)" gap={4}>
					{projects.map((project, index) => (
						<GridItem key={index}>
							<ProjectCard title={project.title} image={project.image} link={project.link} />
						</GridItem>
					))}
				</Grid>
			</Flex>
		</Flex>
	);
}

export default Works;
