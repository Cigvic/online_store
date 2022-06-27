import React from 'react';
import classes from './Register.module.css';
import H3 from '../H3/H3';
import Button from '../Button/Button';

const Register = () => {
  return (
    <div className={classes.wrapper}>
      <H3 className={classes.title}>New Customer?</H3>
      <p className={classes.text}>Creating an account has many benefits: </p>
      <br/>
      <ul className={classes.ul}>
        <li>Check out faster</li>
        <li>Keep more than one address</li>
        <li>Track orders and more</li>
      </ul>
      <Button>Create An Account</Button>
    </div>
  );
};

export default Register;