import React from 'react';
import Container from './../components/Container/Container';
import PageTitle  from 'components/UI/PageTitle/PageTitle';
import sliderData from './../config/About-Us';
import Slide from './../components/Slide/Slide';

const AboutUs = () => {

  return (
    <main>
      <Container className='default centered'>
        <PageTitle>About Us</PageTitle>
      </Container>
        {sliderData.map((data, index) => {
          return (
            <Slide key={index} theme={data.theme} config={data.config}/>
          )
        })}
    </main>
  );
};

export default AboutUs;