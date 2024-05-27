import { Button } from '@chakra-ui/react'
import PropTypes from 'prop-types';

export default function NavButton({name}){
    return (
        <Button>{name}</Button>
    );
}

NavButton.propTypes = {
    name: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
};