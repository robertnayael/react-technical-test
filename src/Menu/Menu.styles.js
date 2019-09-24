import styled, { keyframes } from 'styled-components';

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
 * Wraps everything except the open/close button. Makes sure
 * that menu contents never "leak" outside of this container,
 * which might result in unwanted scrollbards.
 */
export const MenuContentsWrapper = styled.div`
    position: absolute;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    pointer-events: ${p => p.isOpen ? 'auto' :  'none'};
`;

/**
 * Wraps everything except the open/close button.
 */
export const MenuContents = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background: #ee5f63;
    transform: scale(0);
    animation: ${p => getAnimation(p.transitionState)} 500ms forwards;
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

export const ToggleButton = styled.button`
    position: absolute;
    top: 1rem;
    right: 1rem;
    z-index: 3;
    border: none;
    width: 2rem;
    height: 2rem;
    background: #fff;
`;

const menuEnter = keyframes`
    0%   {
        transform: translateX(100%) skew(45deg, 0deg);
    }
    100% {
        transform: none;
    }
`;

const menuExit = keyframes`
    0%   {
        transform: none;
    }
    100% {
        transform: scale(0);
    }
`;

const getAnimation = (transitionState) => ({
    'entering': menuEnter,
    'entered': menuEnter,
    'exiting': menuExit,
}[transitionState] || 'none');