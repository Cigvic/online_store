import React from 'react';
import Container from './../components/Container/Container';
import PageTitle from './../components/UI/PageTitle/PageTitle';
import ContactForm from './../components/UI/ContactForm/ContactForm';

const ContactUs = () => {
  return (
    <Container className='default centered'>
      <PageTitle>Contact Us</PageTitle>
      <ContactForm />
    </Container>
  );
};

export default ContactUs;