import React from 'react';
import {
    faCreditCard,
    faInfoCircle,
    faLifeRing,
    faPhoneAlt,
    faPlane,
    faSignOutAlt,
    faUserCircle,
    faQuestionCircle,
} from '@fortawesome/free-solid-svg-icons';

import Menu from './Menu';
import avatar from './avatar.png';

function App() {
  return (
    <Menu
        footerCaption="We're here to help"
        footerPhone="+44 (0) 20 8050 3459"
        footerEmail="support@awaymo.com"
        userName="Dominik"
        userLastName="Biel"
        userBalance="£ 1,500.00"
        userAvatar={avatar}
    >
      <Menu.Item
          label="Profile"
          icon={faUserCircle}
          group={Menu.groups.main}
          orderInGroup={1}
      />
      <Menu.Item
          label="My Bookings"
          icon={faPlane}
          group={Menu.groups.main}
          orderInGroup={2}
      />
      <Menu.Item
          label="My Payments"
          icon={faCreditCard}
          group={Menu.groups.main}
          orderInGroup={3}
      />
      <Menu.Item
          label="Support"
          icon={faLifeRing}
          group={Menu.groups.sideBottom}
          orderInGroup={3}
      />
      <Menu.Item
          label="Contact Us"
          icon={faPhoneAlt}
          group={Menu.groups.sideBottom}
          orderInGroup={4}
      />
      <Menu.Item
          label="Log Out"
          icon={faSignOutAlt}
          group={Menu.groups.main}
          orderInGroup={4}
      />
      <Menu.Item
          label="About Us"
          icon={faQuestionCircle}
          group={Menu.groups.sideBottom}
          orderInGroup={1}
      />
      <Menu.Item
          label="FAQ"
          icon={faInfoCircle}
          group={Menu.groups.sideBottom}
          orderInGroup={2}
      />
      <Menu.Item
          label="Resume Application"
          group={Menu.groups.main}
          orderInGroup={5}
          noMobile
      />
      <Menu.Item
          label="Home"
          group={Menu.groups.sideTop}
          orderInGroup={1}
          noMobile
      />
      <Menu.Item
          label="Flights"
          group={Menu.groups.sideTop}
          orderInGroup={2}
          noMobile
      />
      <div/>
    </Menu>
  );
}

export default App;
