import React from 'react';

import { StyledItem } from './Item.styles';

const Item = ({ label, ...props }) => {
    return (
        <StyledItem {...props}>
            {label}
        </StyledItem>
    );
};

export default Item;
