import React, {useState, useContext} from 'react';
import classes from './LoginForm.module.css';
import H3 from './../H3/H3';
import Input from './../Input/Input';
import Button from './../Button/Button';
import Container from './../../Container/Container';
import { Link, useNavigate } from 'react-router-dom';
import Label from '../Label/Label';
import { Context } from 'index';
import userService from './../../../services/userService';
import jwt_decode  from 'jwt-decode';


const LoginForm = () => {
  const [formState, setFormState] = useState({
    email: '',
    password: ''
  })
  const {user} = useContext(Context);
  const navigate = useNavigate();
  async function handleSubmit(data) {
    await userService.login(data)
    .then((res) => {
      console.log(res.data);
      localStorage.setItem("token", res.data.token);
      user.setIsAuth(true);
      user.setUser(jwt_decode(res.data.token))
      navigate('/');
    })
    .catch ((e) => {
      alert('Неправильный логин или пароль');
    })
  }

  return (
    <form className={classes.body} onSubmit={e => {e.preventDefault(); handleSubmit(formState)}}>
      <H3 className={classes.title}>Registered Customers</H3>
      <p className={classes.text}>If you have an account, sign in with your email address.</p>
      <Label  isRequired={'1'} htmlFor="email">
        Email
      </Label>
      <Input onChange={(e) => setFormState({...formState, email:e.target.value})} value={formState.email} className={`Input Input__light-theme ${classes.input}`} type='email' id='email' placeholder='Your email'/>
      <Label isRequired={'1'} htmlFor="password">
        Password
      </Label>
      <Input onChange={(e) => setFormState({...formState, password:e.target.value})} value={formState.password}  className={`Input Input__light-theme ${classes.input}`} type='password' id='password' placeholder='Your password'/>
      <Container className={`flex align-center ${classes.btns}`}>
        <Button type='submit'>Sign In</Button>
        <Link to='/' className={classes.link}>Forgot Your Password?</Link>
      </Container>
    </form>
  );
};

export default LoginForm;