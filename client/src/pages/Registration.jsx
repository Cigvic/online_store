import PageTitle from 'components/UI/PageTitle/PageTitle';
import React from 'react';
import Container from '../components/Container/Container';
import RegisterForm from './../components/UI/RegisterForm/RegisterForm';

const Registration = () => {
  return (
    <Container className='default centered'>
      <PageTitle>Registration</PageTitle>
      <Container className='default flex all-center'>
        <RegisterForm />
      </Container>
    </Container>
  );
};

export default Registration;