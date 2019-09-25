import React from 'react';

import { StyledItem, Icon } from './Item.styles';

const Item = ({ label, icon, ...props }) => {
    return (
        <StyledItem {...props}>
            {icon && <Icon icon={icon}/>}
            {label}
        </StyledItem>
    );
};

export default Item;
