import React from 'react';
import { Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay, Navigation} from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import classes from './Slider.module.css';
import Container from 'components/Container/Container';
const Slider = () => {

  return (
    <Container className='default flex align-center justify-space-between'>
      <Swiper 
      modules={[Autoplay, Navigation]} 
      autoplay
      loop
      navigation
      className={classes.slider}
      >
        <SwiperSlide>
          <div className={classes.slide1}>Hi</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={classes.slide2}>Ola</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={classes.slide3}>Nihao</div>
        </SwiperSlide>
      </Swiper>
    </Container>
  );
};

export default Slider;