import styled from 'styled-components';

/**
 * Wraps the whole menu, including the open/close button. Note that
 * it has zero width and height, as all of its children are absolutely
 * positioned.
 * 
 * By moving this element around, you can reposition the whole menu.
 */
export const Container = styled.nav`
    position: relative;
`;

/**
 * Wraps everything except the open/close button
 */
export const MenuContents = styled.div`
    position: absolute;
    width: 100vw;
    height: 100vh;
    background: #ee5f63;
`;

/**
 * List containing all menu links
 */
export const ItemList = styled.ul`
    @media only screen and (min-width: 1000px)  {
        width: 70%;
        display: grid;
        grid-template-columns: 1fr 1fr;
        /* We need to define a minimum of 2 empty rows + 1 extra row
           for the items to be laid out correctly, as some items
           end up in row 3. More rows will be inserted automatically. */
        grid-template-rows: 1fr 1fr 1fr;
    }
`;
