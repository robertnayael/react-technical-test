import React from 'react';
import PropTypes from 'prop-types';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

import { Button, Icon } from './ToggleButton.styles';

const ToggleButton = ({ isMenuOpen, onClick }) => (
    <Button onClick={onClick}>
        <Icon
            isMenuOpen={isMenuOpen}
            icon={isMenuOpen ? faTimes : faBars}
        />
    </Button>
);

ToggleButton.propTypes = {
    isMenuOpen: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default ToggleButton;
