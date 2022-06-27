import React from 'react';
import './Blackbar.css'
import Container from './../Container/Container';
import ShopInfo from './../ShopInfo/ShopInfo';

const Blackbar = (props) => {
  return (
    
    <div className='Blackbar'>
      <Container className='default flex justify-space-between align-center'>
        <div className='Blackbar__worktime'>
          <span className='Blackbar__text'>
            <span className='Blackbar__grey-text'>Mon-Thu:</span> 9:00 AM - 5:30 PM
            <ShopInfo mix='Blackbar__shop-info'/>
            </span>
            <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 5.76929L8 7.76929L6 5.76929" stroke="white" strokeWidth="1.6" strokeLinecap="round"/>
            </svg>
        </div>
        <span className='Blackbar__grey-text'>Visit our showroom in 1234 Street Adress City Address, 1234  <a className='Blackbar__link' href="https://fonts.google.com/icons">Contact Us</a></span>
        <span className='Blackbar__text'>Call Us: (00) 1234 5678</span>
      </Container>
    </div>
  );
};

export default Blackbar;