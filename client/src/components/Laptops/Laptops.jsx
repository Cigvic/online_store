import axios from 'axios';
import Container from 'components/Container/Container';
import Preview from 'components/Preview/Preview';
import ProductCard from 'components/UI/ProductCard/ProductCard';
import React, { useEffect, useState } from 'react';
import Tabs from './../UI/Tabs/Tabs';
import Loader from './../UI/Loader/Loader';

const Laptops = () => {
  const [products, setProducts] = useState([]);
  const [Loading, setLoading] = useState(false);
  async function fetchProducts(config) {
    setLoading(true);
    const response = await axios.get('https://dummyjson.com/products', config);
    setProducts(response.data.products);
    setLoading(false);
  }
  useEffect(() => {
    fetchProducts({params:{
      limit: 5,
      skip: 5
    }});
  }, []);
  return (
    <Container className='default'>
    <Tabs state={Loading} headers={[
      {
        title: 'Top rating',
        config: {
          params: {
            limit: 5,
            skip: 10
          }
          
        }
      }, 
      {
        title: 'Most popular',
        config: {
          params: {
            limit: 5,
            skip: 15
          }
        }
      }, 
      {
        title: 'Newest',
        config: {
          params: {
            limit: 5,
            skip: 20
          }
        }
      }
      ]} update={fetchProducts}/>
    <Container className='default flex'>
      <Preview title='Laptops' background='https://thumb.cloud.mail.ru/weblink/thumb/xw1/pimb/C4dtxjHBX'/>
      {
        (Loading) 
        ? <Loader/> 
        : <Container className='default flex all-center'>
          {
              products.map((item, index) => {
                return (
                    <ProductCard key={index} {...item} />
                )
              })
            }
        </Container>
      }
    </Container>
  </Container>
  );
};

export default Laptops;