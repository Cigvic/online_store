import React from 'react';
import classes from './MarketingCard.module.css';

const MarketingCard = ({icon, title, text, ...props}) => {
  return (
    <div className={classes.card}>
      <img src={icon} alt="Useless pic" />
      <h3 className={classes.title}>{title}</h3>
      <p className={classes.text}>{text}</p>
    </div>
  );
};

export default MarketingCard;