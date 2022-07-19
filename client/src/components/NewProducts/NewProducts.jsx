import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import ProductCard from './../UI/ProductCard/ProductCard';

import classes from './NewProducts.module.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Loader from 'components/UI/Loader/Loader';

const NewProducts = () => {
  const [products, setProducts] = useState([]);
  const [Loading, setLoading] = useState(true);

  async function fetchProducts() {
    const response = await axios.get('https://dummyjson.com/products', {params:{
      limit: 18,
    }});
    setProducts(response.data.products);
    setTimeout(() => {
      setLoading(false);
    }, 1000)
  }
  useEffect(() => {
    fetchProducts()
  }, []);
  return (
    <section className={classes.container}>
      <div className={classes.textblock}>
        <h3 className={classes.header}>New Products</h3>
        <Link to='/' className={classes.link}>See All New Products</Link>
      </div>
      {(Loading) ? <Loader/> : <Swiper
        style={{paddingRight: '1px'}}
        modules={[Navigation]} 
        navigation 
        slidesPerView={6}
      >
        {
          products.map((item, index) => {
            return (
              <SwiperSlide key={index} style={{width: '234px'}}>
                <ProductCard {...item}/>
              </SwiperSlide>
            )
          })
        }
      </Swiper>}
    </section>
  );
};

export default NewProducts;