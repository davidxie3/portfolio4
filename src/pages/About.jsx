import { Text, Stack, Box } from "@chakra-ui/react"

function About(){
    return (
        <Box h="calc(100vh - 160px)" display="flex" alignItems="center" justifyContent="center">
            <Stack align="center">
                <Text fontSize={96} color="mainPurple.primary" fontFamily='EpiceneDisplayRegular'>ABOUT ME</Text>
                <Text fontSize={84} color="mainPurple.primary" fontFamily='EpiceneDisplayRegular'>I AM DAVID XIE WHATS UP </Text>
            </Stack>
        </Box>
    );
}


export default About;
