import React from 'react';

import { MenuWrapper } from './Menu.styles';
import Item from './Item';
import groups from './groups';

const Menu = ({children}) => {
    return (
        <MenuWrapper>
            {children}
        </MenuWrapper>
    );
};









Menu.Item = Item;
Menu.groups = groups;

export default Menu;
