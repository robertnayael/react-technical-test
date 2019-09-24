import React from 'react';

import Menu from './Menu';

function App() {
  return (
    <Menu>
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
