import React from 'react';

import classes from './NavPanel.module.css'
import Nav from './Nav/Nav';
import settings from './Nav/NavData';
const NavPanel = () => {   
  return (
    <div className={classes.container}>
      <Nav title={settings.information.title} links={settings.information.links}/>
      <Nav title={settings.pcParts.title} links={settings.pcParts.links}/>
      <Nav title={settings.desktopPCs.title} links={settings.desktopPCs.links}/>
      <Nav title={settings.laptops.title} links={settings.laptops.links}/>
      <Nav title={settings.address.title} links={settings.address.links}/>
    </div>
  );
};

export default NavPanel;