import React from 'react';
import PropTypes from 'prop-types';

import {
    Avatar,
    Balance,
    BalanceCaption,
    Name,
    FullName,
    Wrapper
} from './UserInfo.styles';

const UserInfo = ({
    name,
    lastName,
    balance,
    avatar,
}) => (
    <Wrapper>
        <Avatar image={avatar} />
        <Name>{name}</Name>
        <FullName>{name} {lastName}</FullName>
        <BalanceCaption/>
        <Balance>{balance}</Balance>
    </Wrapper>
);

UserInfo.propTypes = {
    name: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    balance: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
};

export default UserInfo;
