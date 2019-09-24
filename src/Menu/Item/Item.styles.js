import styled from 'styled-components';

import groups from '../groups';

/**
 * List item component that, depending on the menu version, can end up in
 * one of the following states:
 * * Mobile variant:
 *   * item is displayed
 *   * item is hidden
 * * Desktop variant:
 *   * item is displayed in the main part of the menu
 *   * item is displayed to the side
 *   * item is displayed to the side on the top
 */
export const StyledItem = styled.li.attrs(({ group, orderInGroup: order }) => ({
    column: getColumn(group),
    row: getRow(group, order),
    topOffset: group === groups.sideBottom,
}))`
    color: #fff;
    font-weight: 900;
    font-size: 2em;
    white-space: nowrap;
    display: ${p => p.noMobile ? 'none' : 'block'};
    @media only screen and (min-width: 1000px)  {
        display: block;
        grid-column: ${p => p.column};
        grid-row: ${p => p.row};
        transform: translateY(${p => p.topOffset ? 0.5 : 0}em);
    }
`;

/**
 * Calculates the target grid row depending on the item's group
 * and its order within the group.
 */
const getRow = (group, order) => ({
    [groups.main]: order => order + 2,              // Start from row 3
    [groups.sideTop]: order => Math.min(order, 2),  // Cap row index at 2
    [groups.sideBottom]: order => order + 2,        // Start from row 3
}[group])(order);

/**
 * Calculates the target grid row depending on the item's group.
 */
const getColumn = (group) => ({
    [groups.main]: 2,
    [groups.sideTop]: 1,
    [groups.sideBottom]: 1,
}[group]);