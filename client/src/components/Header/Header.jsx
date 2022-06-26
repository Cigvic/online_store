import React from 'react';

import './Header.css'
import Blackbar from './../Blackbar/Blackbar';
import Menu from './../Menu/Menu';

const Header = () => {
  const menuItems = [
    {
      title: 'Laptops',
      link: 'https://google.com'
    },
    {
      title: 'Desktop PCs',
      link: 'https://google.com'
    },
    {
      title: 'Networking Devices',
      link: 'https://google.com'
    },
    {
      title: 'Printers & Scanners',
      link: 'https://google.com'
    },
    {
      title: 'PC Parts',
      link: 'https://google.com'
    },
    {
      title: 'All Other Products',
      link: 'https://google.com'
    },
    {
      title: 'Repair',
      link: 'https://google.com'
    }
  ]
  return (
    <div className='Header'>
      <Blackbar/>
      <Menu items={menuItems}/>
      
    </div>
  );
};

export default Header;