import React from 'react';

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
          group={Menu.groups.main}
          orderInGroup={1}
      />
      <Menu.Item
          label="My Bookings"
          group={Menu.groups.main}
          orderInGroup={2}
      />
      <Menu.Item
          label="My Payments"
          group={Menu.groups.main}
          orderInGroup={3}
      />
      <Menu.Item
          label="Support"
          group={Menu.groups.sideBottom}
          orderInGroup={3}
      />
      <Menu.Item
          label="Contact Us"
          group={Menu.groups.sideBottom}
          orderInGroup={4}
      />
      <Menu.Item
          label="Log Out"
          group={Menu.groups.main}
          orderInGroup={4}
      />
      <Menu.Item
          label="About Us"
          group={Menu.groups.sideBottom}
          orderInGroup={1}
      />
      <Menu.Item
          label="Faq"
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
    </Menu>
  );
}

export default App;
