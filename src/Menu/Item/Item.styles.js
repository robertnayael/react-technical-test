import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
    white-space: nowrap;

    @media (max-width: 999px)  {
        display: ${p => p.noMobile ? 'none' : 'flex'};
        align-items: center;
        font-size: 1.25em;
        line-height: 1.25rem;
        flex-grow: 1;
        &:not(:first-child) {
            border-top: 1px solid rgba(255, 255, 255, 0.25);
        }
    }

    @media (min-width: 1000px)  {
        display: ${p => p.noMobile ? 'none' : 'block'};
        font-size: 2em;
        line-height: 3rem;
        font-weight: 900;
        display: block;
        grid-column: ${p => p.column};
        grid-row: ${p => p.row};
        transform: translateY(${p => p.topOffset ? 0.5 : 0}em);
    }
`;

export const Icon = styled(FontAwesomeIcon)`
    display: block;
    margin-right: 0.75rem;
    width: 1.25rem !important; /* TODO: check if size can be changed in a more elegant way */
    height: 1.25rem !important;
    & * {
        fill: $fff;
    }
    @media (min-width: 1000px) {
        display: none;
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
