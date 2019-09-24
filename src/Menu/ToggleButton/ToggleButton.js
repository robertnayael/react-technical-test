import React from 'react';
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

export default ToggleButton;
