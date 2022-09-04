import Container from 'components/Container/Container';
import React from 'react';
import PageTitle from './../components/UI/PageTitle/PageTitle';

const Device = () => {
  const device = {
    id: '1',
    name: 'kekis',
    price: '300$',
    img: 'somelink'
  };

  return (
    <Container className="full-width">
      <PageTitle>
        {}
      </PageTitle>
    </Container>
  );
};

export default Device;