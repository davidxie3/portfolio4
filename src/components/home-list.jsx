import {
    List, 
    ListItem,
} from '@chakra-ui/react';

export default function HomeList() {
    return(
        <List>
            <ListItem>Home</ListItem>
            <ListItem>About</ListItem>
            <ListItem>Projects</ListItem>
            <ListItem>Contact</ListItem>
        </List>
    );
} 
