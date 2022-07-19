import React, { useEffect, useState } from 'react';
import Container from 'components/Container/Container';
import ProductCard from './../UI/ProductCard/ProductCard';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import Preview from './../Preview/Preview';

const AllInOnePCs = () => {
  const [products, setProducts] = useState([]);

  async function fetchProducts() {
    const response = await axios.get('https://dummyjson.com/products', {params:{
      limit: 5,
    }});
    setProducts(response.data.products);
  }
  useEffect(() => {
    fetchProducts()
  }, []);
  return (
    <Container className='default flex'>
      <Preview title='All-In-One PCs' background='https://thumb.cloud.mail.ru/weblink/thumb/xw1/9yvs/eARf5DESG'/>
      <Swiper
        slidesPerView={5}
      >
        {
            products.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <ProductCard {...item} />
                </SwiperSlide>
              )
            })
          }
      </Swiper>
    </Container>
  );
};

export default AllInOnePCs;