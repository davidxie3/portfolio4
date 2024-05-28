import { Flex, Text, Spacer, Stack, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import NavButton from "./navbar-button";
const NAVBAR_height = 200;   

export default function NavBar(){
    return (
        <Flex h={NAVBAR_height} justify="center" align="center" p="5" w="100%">
            <Accordion allowToggle="true" >
                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <NavButton name="Works"/>
                            <AccordionIcon/>
                        </AccordionButton>
                    </h2>
                    <AccordionPanel>
                        <Stack>
                            <Link to='/works'> <NavButton name="Photography"/> </Link>
                            <Link to='/works'> <NavButton name="Development"/> </Link>
                            <Link to='/works'> <NavButton name="Design"/> </Link>
                        </Stack>
                        
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
            <NavButton name="Archive"/>
            <Spacer/>
            <Link to='/'><Text fontSize={48} color="mainPurple.primary" fontFamily='EpiceneDisplayRegularItalic'> David Xie </Text></Link>
            <Spacer/>
            <Link to='/about'> <NavButton name="About"/> </Link>
            <NavButton name="Contact"/>
        </Flex>
    );
}