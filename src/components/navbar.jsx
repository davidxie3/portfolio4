import { Flex } from "@chakra-ui/react";
import NavButton from "./navbar-button";
const NAVBAR_height = 70;   

export default function NavBar(){
    return (
        <Flex h={NAVBAR_height} align="center" p="5" w="100%">
            <NavButton name="Works"/>
        </Flex>
    );
}