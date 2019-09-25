import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (min-width: 1000px) {
        display: grid;
        grid-template-columns: 4rem 1fr;
        grid-template-rows: 1fr 1fr;
        grid-column-gap: 0.5rem;
        grid-template-areas:
            "avatar fullname"
            "avatar balance";
        width: 30rem;
        height: 5rem;
        position: absolute;
        top: 10vh;
        left: 36vw;
        left: calc((100vw * 0.35) + 0.5rem);
        z-index: 2;
        font-weight: 600;
        margin: 0;
        padding: 0 0 1rem 0;
        border-bottom: 1px solid rgba(255, 255, 255, 0.25);
    }
    color: #fff;
    font-size: 1.3em;
    margin-top: 1rem;
`;

export const Name = styled.span`
    display: block;

    @media (min-width: 1000px) {
        display: none;
    }
`;

export const FullName = styled.span`    
    display: none;

    @media (min-width: 1000px) {
        display: block;
        grid-area: fullname;
        align-self: end;
    }
`;

export const BalanceCaption = styled.span`
    display: block;
    font-size: 0.8em;
    line-height: 1.8em;

    &:after {
        content: 'Available Balance'
    }
    @media (min-width: 1000px) {
        display: none;
    }
`;

export const Balance = styled.span`

@media (min-width: 1000px) {
    grid-area: balance;
    align-self: start;
    &:after {
            content: ' Available'
        }
    }
`;

export const Avatar = styled.div`
    width: 3rem;
    height: 3rem;
    margin-bottom: 0.5em;
    @media (min-width: 1000px) {
        grid-area: avatar;
        margin: 0;
        width: 4rem;
        height: 4rem;
    }
    background: url('${p => p.image}') no-repeat;
    background-size: 80%;
    background-position: center center;
    background-color: #fff;
    border-radius: 50%;
`;
