import { Text, Stack, Box } from "@chakra-ui/react";

function App() {
  return (
    <>
      <Box
        h="calc(100vh - 160px)"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Stack align="center">
          <Text
            fontSize={96}
            color="mainPurple.primary"
            fontFamily="EpiceneDisplayRegular"
          >
            XYZ 4 9
          </Text>
          <Text
            fontSize={84}
            color="mainPurple.primary"
            fontFamily="EpiceneDisplayRegular"
          >
            CREATIVE DEVELOPER, PHOTOGRAPHER.
          </Text>
        </Stack>
      </Box>
    </>
  );
}

export default App;
