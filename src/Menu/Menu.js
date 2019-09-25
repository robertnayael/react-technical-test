import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { Transition } from 'react-transition-group';

import {
    Container,
    Header,
    ItemList,
    MenuContents,
    MenuContentsWrapper
} from './Menu.styles';
import Item from './Item';
import Footer from './Footer';
import ToggleButton from './ToggleButton';
import UserInfo from './UserInfo';
import groups from './groups';


const Menu = ({
    children,
    footerCaption,
    footerPhone,
    footerEmail,
    userName,
    userLastName,
    userBalance,
    userAvatar,
}) => {
    const [ isOpen, setIsOpen ] = useState(false);
    const toggleOpen = useCallback(
        () => setIsOpen(isOpen => !isOpen),
        []
    );

    return (
        <Container>
            <ToggleButton
                onClick={toggleOpen}
                isMenuOpen={isOpen}
            />
            <MenuContentsWrapper
                isOpen={isOpen}
                aria-hidden={!isOpen}
                aria-label="Main menu"
                role="navigation"
            >
                <Transition in={isOpen} timeout={500}>
                    {transitionState => (
                        <MenuContents transitionState={transitionState} isOpen={isOpen} >
                            <Header/>
                            <UserInfo
                                name={userName}
                                lastName={userLastName}
                                balance={userBalance}
                                avatar={userAvatar}
                            />
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

Menu.propTypes = {
    children: PropTypes.arrayOf(PropTypes.element),
    footerCaption: PropTypes.string.isRequired,
    footerPhone: PropTypes.string.isRequired,
    footerEmail: PropTypes.string.isRequired,
    userName: PropTypes.string.isRequired,
    userLastName: PropTypes.string.isRequired,
    userBalance: PropTypes.string.isRequired,
    userAvatar: PropTypes.string.isRequired,
};

Menu.Item = Item;
Menu.groups = groups;

export default Menu;
