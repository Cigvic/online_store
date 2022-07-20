import React, {useState} from 'react';
import classes from './RegisterForm.module.css';
import Input from './../Input/Input';
import Label from './../Label/Label';
import H3 from '../H3/H3';
import Button from '../Button/Button';
import axios from 'axios';
const RegisterForm = () => {
  const [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phoneNumber: ''
  });
  
  async function handleSubmit (e) {
    e.preventDefault();
    console.log(formState);
    await axios.post('http://localhost:5000/api/user/registration', formState)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  return (
    <form className={classes.form}>
      <H3>Registration form</H3>
      <p className={classes.text}>Create an account</p>
      <Label isRequired={'1'} htmlFor="firstName"> 
        First name
      </Label>
      <Input value={formState.firstName} onChange={(e) => setFormState({...formState, firstName:e.target.value})} className={`Input Input__light-theme ${classes.input}`} id='firstName' placeholder='Your first name'/>
      <Label isRequired={'1'} htmlFor="lastName"> 
        Last name
      </Label>
      <Input value={formState.lastName} onChange={(e) => setFormState({...formState, lastName:e.target.value})} className={`Input Input__light-theme ${classes.input}`} id='lastName' placeholder='Your last name'/>
      <Label isRequired={'1'} htmlFor="email"> 
        Email
      </Label>
      <Input value={formState.email} onChange={(e) => setFormState({...formState, email:e.target.value})} className={`Input Input__light-theme ${classes.input}`} type="email" id='email' placeholder='Your email'/>
      <Label isRequired={'1'} htmlFor="password"> 
        Password
      </Label>
      <Input value={formState.password} onChange={(e) => setFormState({...formState, password:e.target.value})} className={`Input Input__light-theme ${classes.input}`} type="password" id='password' placeholder='Your password'/>
      <Label isRequired={'1'} htmlFor="phone"> 
        Phone
      </Label>
      <Input value={formState.phoneNumber} onChange={(e) => setFormState({...formState, phoneNumber:e.target.value})} className={`Input Input__light-theme ${classes.input}`} type="tel" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" id='phone' placeholder='Your phone'/>
      <Button onClick={handleSubmit}>Submit</Button>
    </form>
  );
};

export default RegisterForm;