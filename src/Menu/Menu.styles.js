import styled from 'styled-components';

export const MenuWrapper = styled.ul`
    background: #ee5f63;
    width: 50vw;
    @media only screen and (min-width: 1000px)  {
        display: grid;
        grid-template-columns: 1fr 1fr;
        /* We need to define a minimum of 2 empty rows + 1 extra row
           for the items to be laid out correctly, as some items
           end up in row 3. More rows will be inserted automatically. */
        grid-template-rows: 1fr 1fr 1fr;
    }
`;
