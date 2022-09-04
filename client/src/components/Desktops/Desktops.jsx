import React, { useEffect, useState } from 'react';
import Container from 'components/Container/Container';
import ProductCard from './../UI/ProductCard/ProductCard';
import axios from 'axios';
import Preview from './../Preview/Preview';

const Desktops = () => {
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
      <Preview title='Desktops' background='https://thumb.cloud.mail.ru/weblink/thumb/xw1/Uj8P/hrw3vpCKV'/>
      <Container className='default flex all-center'>
        {
            products.map((item, index) => {
              return (
                  <ProductCard key={index} {...item} />
              )
            })
          }
      </Container>
    </Container>
  );
};

export default Desktops;