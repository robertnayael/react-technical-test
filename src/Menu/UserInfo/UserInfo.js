import React from 'react';

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

export default UserInfo;
