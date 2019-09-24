import React from 'react';

import {
    StyledFooter,
    Caption,
    Email,
    Phone,
} from './Footer.styles';

const Footer = ({ caption, phone, email }) => (
    <StyledFooter>
        <Caption>{caption}</Caption>
        <Phone href={`tel:${formatPhone(phone)}`}>{phone}</Phone>
        <Email href={`mailto:${email}`}>{email}</Email>
    </StyledFooter>
);

/** Strips all characters except digits and plus sign */
const formatPhone = phoneNo => phoneNo.replace(/[^\d+]/g, '');

export default Footer;
