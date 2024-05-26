import { Flex, Text, Spacer } from "@chakra-ui/react";
import NavButton from "./navbar-button";
const NAVBAR_height = 90;   

export default function NavBar(){
    return (
        <Flex h={NAVBAR_height} justify="center" align="center" p="5" w="100%">
            <NavButton name="Works"/>
            <NavButton name="Archive"/>
            <Spacer/>
            <Text fontSize={48} color="mainPurple.primary" fontFamily='EpiceneDisplayRegularItalic'> David Xie </Text>
            <Spacer/>
            <NavButton name="About"/>
            <NavButton name="Contact"/>
        </Flex>
    );
}