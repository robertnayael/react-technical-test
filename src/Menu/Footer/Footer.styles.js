import styled from 'styled-components';

export const StyledFooter = styled.footer`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 0;
    width: calc(100% - 4rem);
    display: flex;
    flex-direction: column;
    align-items: center;
    border-top: 1px solid rgba(255, 255, 255, 0.25);
    padding-top: 2rem;
    @media (min-width: 1000px)  {
        bottom: 2rem;
    }
    & > * {
        color: #fff;
        text-decoration: none;
        font-size: 1.2rem;
        line-height: 2rem;
    }
`;

export const Caption = styled.span`
    display: block;
`;

export const Phone = styled.a`
    display: none;
    @media (min-width: 1000px)  {
        display: block;
    }
`;

export const Email = styled.a`
    display: none;
    @media (min-width: 1000px)  {
        display: block;
    }
`;
