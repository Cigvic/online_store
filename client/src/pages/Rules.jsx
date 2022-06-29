import React from 'react';
import Container from '../components/Container/Container';
import PageTitle from 'components/UI/PageTitle/PageTitle';
import Policy from './../components/Policy/Policy';

const Rules = () => {
  return (
    <Container className='default centered'>
      <PageTitle>Shop Terms & Conditions</PageTitle>
      <Policy />
    </Container>
  );
};

export default Rules;