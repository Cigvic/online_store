import React from 'react';
import classes from './ProductCard.module.css';

const ProductCard = (props) => {
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
    </article>
  );
};

export default ProductCard;