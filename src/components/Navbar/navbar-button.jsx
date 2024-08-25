import { Button } from '@chakra-ui/react';
import PropTypes from 'prop-types';

export default function NavButton({ name, variant, fontSize }) {
    return (
        <Button variant={variant} size="xl" fontSize={fontSize}>
            {name}
        </Button>
    );
}

NavButton.propTypes = {
    name: PropTypes.string.isRequired,
    variant: PropTypes.string.isRequired,
    fontSize: PropTypes.string,  // Optional, not required
};
