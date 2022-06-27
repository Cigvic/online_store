import React from 'react';
import Container from './../components/Container/Container';
import PageTitle from 'components/UI/PageTitle/PageTitle';
import LoginForm from './../components/UI/LoginForm/LoginForm';
import Register from './../components/UI/Register/Register';


const Login = () => {
  return (
    <Container className='default centered'>
      <PageTitle>Customer Login</PageTitle>
      <Container className='default flex all-center'>
        <LoginForm />
        <Register />
      </Container>
    </Container>
  );
};

export default Login;