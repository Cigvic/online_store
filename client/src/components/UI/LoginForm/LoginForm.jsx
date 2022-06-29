import React from 'react';
import classes from './LoginForm.module.css';
import H3 from './../H3/H3';
import Input from './../Input/Input';
import Button from './../Button/Button';
import Container from './../../Container/Container';
import { Link } from 'react-router-dom';
import Label from '../Label/Label';
const LoginForm = () => {
  return (
    <form className={classes.body}>
      <H3 className={classes.title}>Registered Customers</H3>
      <p className={classes.text}>If you have an account, sign in with your email address.</p>
      <Label  isRequired={'1'} htmlFor="email">
        Email
      </Label>
      <Input className={`Input Input__light-theme ${classes.input}`} type='email' id='email' placeholder='Your email'/>
      <Label isRequired={'1'} htmlFor="password">
        Password
      </Label>
      <Input className={`Input Input__light-theme ${classes.input}`} type='password' id='password' placeholder='Your password'/>
      <Container className={`flex align-center ${classes.btns}`}>
        <Button type='submit'>Sign In</Button>
        <Link to='/' className={classes.link}>Forgot Your Password?</Link>
      </Container>
    </form>
  );
};

export default LoginForm;