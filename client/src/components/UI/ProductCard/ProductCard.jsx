import classes from './ProductCard.module.css';
import Button from './../Button/Button';
import { useContext, useState } from 'react';
import { Context } from 'index';
import Container from 'components/Container/Container';

const ProductCard = (props) => {
  const {basket} = useContext(Context);
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const [count, setCount] = useState(1);

  function renderRating () {
    let stars = ''.repeat(parseInt(props.rating)) + ''.repeat(+((props.rating % 1) > 0.5));
    if (stars.length < 5) stars = stars + ''.repeat(5 - stars.length);
    return stars
  }
  function renderAvailability () {
    const config = {
      css: `${classes.stock}`,
      content: {
        icon: '',
        message: ''
      }
    };
    if (props.stock < 50) { 
        config.css = config.css + ` ${classes['stock_red']}`;
        config.content.icon = '';
        config.content.message = 'check availability'
    } 
    else { 
      config.css = config.css + ` ${classes['stock_green']}`;
      config.content.icon = '';
      config.content.message = 'in stock'
    }
    return <span className={`${config.css}`}><span className={classes.icon}>{config.content.icon}</span>{config.content.message}</span>

  }

  return (
    <article className={classes.card}>
      {renderAvailability ()}
      <img src={props.thumbnail} alt={props.title} className={classes.thumb}/>
      <div className={classes.rating}>
        <span className={classes.stars}>
          {renderRating ()}
        </span>
        <span className={classes.reviews}>Reviews(?)</span>
      </div>
      <h3 className={classes.title}>{`${props.title} : ${props.description}`}</h3>
      <p className={classes.noDiscountPrice}>${props.price}.00</p>
      <p className={classes.price}>${(props.price*(100 - props.discountPercentage)/100).toFixed(2)}</p>
      <Container className={`flex align-center justify-space-between ${classes.buttonContainer}`}>
        <Button 
        onClick={() => {
          if (!(props.id in basket.products)) {
            basket.setProducts({...props, count: count}); 
            setIsAddedToCart(true);
            localStorage.setItem('basket', JSON.stringify(basket.products));
          }
        }}
        className={(isAddedToCart) ? classes.buttonAdded : classes.button}
        ><i className={classes.basket}></i> {(isAddedToCart) ? 'In Cart' : 'Add To Cart'}</Button>
        {isAddedToCart && 
        <Container className={`flex all-center ${classes.controlContainer}`}>
          <Button 
          className={classes.editBtn} 
          onClick={() => {
            if (count > 1) {
              basket.products[props.id].count--;
              setCount(basket.products[props.id].count);

            }
          }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path fill="currentColor" d="M5 11a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2H5Z"></path></svg>
          </Button>
          <div className={classes.count}>{count}</div>
          <Button 
          className={classes.editBtn} 
          onClick={() => {
            if (count < 9) {
              basket.products[props.id].count++;
              setCount(basket.products[props.id].count);
            }
          }}
            ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path fill="currentColor" d="M12 4a1 1 0 0 0-1 1v6H5a1 1 0 1 0 0 2h6v6a1 1 0 1 0 2 0v-6h6a1 1 0 1 0 0-2h-6V5a1 1 0 0 0-1-1Z"></path></svg></Button>
        </Container>}
      </Container>
    </article>
  );
};

export default ProductCard;