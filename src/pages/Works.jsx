import { Flex, Text, Grid, GridItem } from '@chakra-ui/react';
import ProjectCard from '../components/ProjectCard';
import picture4 from '../assets/images/melcourses-mockup.webp';

function Works() {
	const projects = [
		{
			title: "Project 1",
			image: picture4,
			link: "https://example.com/project1",
		},
		{
			title: "Project 2",
			image: picture4,
			link: "https://example.com/project2",
		},
		{
			title: "Project 3",
			image: picture4,
			link: "https://example.com/project3",
		},
		{
			title: "Project 4",
			image: picture4,
			link: "https://example.com/project4",
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
				<Grid mt="160" w="70vw" h='150vh' templateColumns="repeat(2, 1fr)" gap={4}>
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
