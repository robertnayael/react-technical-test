import React, { useCallback, useState } from 'react';
import { Transition } from 'react-transition-group';

import {
    Container,
    ItemList,
    MenuContents,
    ToggleButton,
} from './Menu.styles';
import Item from './Item';
import groups from './groups';

const Menu = ({children}) => {
    const [ isOpen, setIsOpen ] = useState(false);
    const toggleOpen = useCallback(
        () => setIsOpen(isOpen => !isOpen),
        []
    );

    return (
        <Container>
            <ToggleButton onClick={toggleOpen}/>
            <Transition in={isOpen} timeout={500}>
                {transitionState => (
                    <MenuContents transitionState={transitionState} isOpen={isOpen} >
                        <ItemList>
                            {children}
                        </ItemList>
                    </MenuContents>
                )}
            </Transition>
        </Container>
    );
};

Menu.Item = Item;
Menu.groups = groups;

export default Menu;
