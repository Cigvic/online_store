import React from 'react';
import Container from 'components/Container/Container';

import Slider from 'components/UI/Slider/Slider';
import NewProducts from 'components/NewProducts/NewProducts';
import Banner from 'components/Banner/Banner';
import CustomBuilds from 'components/CustomBuilds/CustomBuilds';
import Laptops from 'components/Laptops/Laptops';
import AllInOnePCs from 'components/AllInOnePCs/AllInOnePCs';
import Desktops from 'components/Desktops/Desktops';

const Home = () => {
  return (
    <main style={{overflow: 'hidden'}}>
      <Container className='default centered'>
        <Slider/>
        <NewProducts />
        <Banner />
        <div style={{display: 'grid', gridTemplateColumns: '1', gridRowGap: '40px'}}>
          <CustomBuilds />
          <Laptops />
          <Desktops />
          <AllInOnePCs />
        </div>
      </Container>
    </main>
  );
};

export default Home;