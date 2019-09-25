import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Button = styled.button`
    position: absolute;
    top: 1rem;
    right: 2rem;
    z-index: 3;
    border: none;
    width: 1.5rem;
    height: 1.5rem;
    background: transparent;
`;

export const Icon = styled(
    // This is to avoid passing `isMenuOpen` prop to the underlying component:
    ({ isMenuOpen, ...props}) => <FontAwesomeIcon {...props} />
)`
    width: 100% !important; /* TODO: check if size can be changed in a more elegant way */
    height: 100% !important;
    transition: transform 200ms;
    & * {
        fill: ${p => p.isMenuOpen ? '#fff' : '#ee5f63'};
    }
    &:hover {
        transform: scale(1.1);
    }
`;
