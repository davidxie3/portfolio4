import { Button } from '@chakra-ui/react'
import PropTypes from 'prop-types';

export default function NavButton({name, variant}){
    return (
        <Button variant={variant} size="xl">{name}</Button>
    );
}

NavButton.propTypes = {
    name: PropTypes.string.isRequired,
    variant: PropTypes.string.isRequired,
};