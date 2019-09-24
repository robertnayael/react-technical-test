import React, { useCallback, useState } from 'react';
import { Transition } from 'react-transition-group';

import {
    Container,
    Header,
    ItemList,
    MenuContents,
    MenuContentsWrapper,
    ToggleButton,
} from './Menu.styles';
import Item from './Item';
import Footer from './Footer';
import groups from './groups';

const Menu = ({
    children,
    footerCaption,
    footerPhone,
    footerEmail
}) => {
    const [ isOpen, setIsOpen ] = useState(true);
    const toggleOpen = useCallback(
        () => setIsOpen(isOpen => !isOpen),
        []
    );

    return (
        <Container>
            <ToggleButton onClick={toggleOpen}/>
            <MenuContentsWrapper isOpen={isOpen}>
                <Transition in={isOpen} timeout={500}>
                    {transitionState => (
                        <MenuContents transitionState={transitionState} isOpen={isOpen} >
                            <Header/>
                            <ItemList>
                                {children}
                            </ItemList>
                            <Footer
                                caption={footerCaption}
                                phone={footerPhone}
                                email={footerEmail}
                            />
                        </MenuContents>
                    )}
                </Transition>
            </MenuContentsWrapper>
        </Container>
    );
};

Menu.Item = Item;
Menu.groups = groups;

export default Menu;
