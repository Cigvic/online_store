import React from 'react';
import './Footer.css'
import Container from './../Container/Container';
import MarketingCard from './MarketingCard/MarketingCard';
import Icons from 'components/Icons/Icons';
import SubcribeForm from './SubcribeForm/SubcribeForm';
import NavPanel from './NavPanel/NavPanel';
import Copyright from './Copyright/Copyright';

const Footer = () => {
  return (
    <div className='Footer'>
      <Container className='FW-container'>
        <Container className='Container Footer__card-wrapper'>
          <MarketingCard icon={Icons.support} title='Product Support' text='Up to 3 years on-site warranty available for your peace of mind.'/>
          <MarketingCard icon={Icons.account} title='Personal Account' text='With big discounts, free delivery and a dedicated support specialist.'/>
          <MarketingCard icon={Icons.discount} title='Amazing Savings' text='Up to 70% off new Products, you can be sure of the best price.'/>
        </Container>
      </Container>
      <Container className='FW-container Footer__black-wrapper'>
        <Container className='Container'>
          <SubcribeForm />
          <NavPanel />
        </Container>
        <Container className='Container'>
          <Copyright />
        </Container>
      </Container>
    </div>
  );
};

export default Footer;