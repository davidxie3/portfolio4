import { Text, Spacer, Stack, Box, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, HStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import NavButton from "./navbar-button";

const NAVBAR_HEIGHT = 100;

export default function NavBar() {
    return (
        <Box h={NAVBAR_HEIGHT} position="relative" justify="center" align="center" p="5">
            <HStack w="100%" spacing={9}>
                <Accordion allowToggle>
                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box as='span' flex='1' textAlign='left'>
                                    <NavButton name="Works" />
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel textAlign="left" position="absolute"> 
                            <Stack>
                                <Link to='/works'><NavButton variant="worksNavBar" name="Photography" /></Link>
                                <Link to='/works'><NavButton variant="worksNavBar" name="Development" /></Link>
                                <Link to='/works'><NavButton variant="worksNavBar" name="Design" /></Link>
                            </Stack>
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>

                <NavButton name="Archive" />
                <Spacer />
                <Link to='/'><Text fontSize={48} color="mainPurple.primary" fontFamily='EpiceneDisplayRegularItalic'> David Xie </Text></Link>
                <Spacer />
                <Link to='/about'><NavButton name="About" /></Link>
                <NavButton name="Contact" />
            </HStack>
        </Box>
    );
}
