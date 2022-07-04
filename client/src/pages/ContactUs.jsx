import React from 'react';
import Container from 'components/Container/Container';
import PageTitle from 'components/UI/PageTitle/PageTitle';
import ContactForm from 'components/UI/ContactForm/ContactForm';
import Contacts from 'components/UI/Contacts/Contacts';
import classes from './ContactUs.module.css';
const ContactUs = () => {
  return (
    <Container className={`default centered ${classes.container}`}>
      <PageTitle>Contact Us</PageTitle>
      <Container className='default flex align-center justify-space-between'>
        <ContactForm />
        <Contacts/>
      </Container>
      
    </Container>
  );
};

export default ContactUs;