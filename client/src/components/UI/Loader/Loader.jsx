import React from 'react';
import './Loader.css';
import Container from './../../Container/Container';
const Loader = () => {
  return (
    <Container className='default centered flex all-center'>
      <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </Container>
  );
};

export default Loader;