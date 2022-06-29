import React from 'react';
import Blackbar from './../Blackbar/Blackbar';
import Menu from './../Menu/Menu';
import menuItems from 'config/MainMenu';

const Header = () => {
  return (
    <div className='Header'>
      <Blackbar/>
      <Menu items={menuItems}/>
    </div>
  );
};

export default Header;