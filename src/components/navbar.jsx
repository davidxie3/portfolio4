import { Flex, Text, Spacer } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import NavButton from "./navbar-button";
const NAVBAR_height = 90;   

export default function NavBar(){
    return (
        <Flex h={NAVBAR_height} justify="center" align="center" p="5" w="100%">
            
            <NavButton name="Works"/>
            <NavButton name="Archive"/>
            <Spacer/>
            <Link to='/'><Text fontSize={48} color="mainPurple.primary" fontFamily='EpiceneDisplayRegularItalic'> David Xie </Text></Link>
            <Spacer/>
             <Link to='/about'> <NavButton name="About"/> </Link>
            <NavButton name="Contact"/>
        </Flex>
    );
}