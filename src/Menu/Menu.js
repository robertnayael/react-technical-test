import React, { useState } from 'react';

import {
    Container,
    ItemList,
    MenuContents,
} from './Menu.styles';
import Item from './Item';
import groups from './groups';

const Menu = ({children}) => {

    return (
        <Container>
            <MenuContents>
                    <ItemList>
                        {children}
                    </ItemList>
            </MenuContents>
        </Container>
    );
};

Menu.Item = Item;
Menu.groups = groups;

export default Menu;
