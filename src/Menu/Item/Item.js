import React from 'react';
import PropTypes from 'prop-types';

import groups from '../groups';
import { StyledItem, Icon } from './Item.styles';

const Item = ({ label, icon, ...props }) => {
    return (
        <StyledItem {...props}>
            {icon && <Icon icon={icon}/>}
            {label}
        </StyledItem>
    );
};

Item.propTypes = {
    label: PropTypes.string.isRequired,
    icon: PropTypes.object,
    group: PropTypes.oneOf(Object.values(groups)),
    orderInGroup: PropTypes.number.isRequired,
};


export default Item;
