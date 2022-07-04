import React from 'react';
import classes from './ContactForm.module.css';
import Input from './../Input/Input';
import Label from '../Label/Label';
import Container from 'components/Container/Container';
import TextArea from './../TextArea/TextArea';
import Button from '../Button/Button';

const ContactForm = () => {
  return (
    <form className={classes.body}>
      <p className={classes.text}>
        We love hearing from you, our Shop customers. 
        <br/>
        Please contact us and we will make sure to get back to you as soon as we possibly can.
      </p>
      <Container className={classes.container}>
        <Label isRequired='1' htmlFor='name'>
          Your Name
        </Label>
        <Input className='Input Input__light-theme' type='text' placeholder='Your Name' id='name'/>
        <Label isRequired='1' htmlFor='email'>
          Your Email
        </Label>
        <Input className='Input Input__light-theme' type='email' placeholder='Your Email' id='email'/>
        <Label isRequired='1' htmlFor='message'>
          What’s on your mind?
        </Label>
        <TextArea className={classes.textarea} id='message' placeholder='Jot us a note and we’ll get back to you as quickly as possible'/>
        <Button>Submit</Button>
      </Container>
    </form>
  );
};

export default ContactForm;