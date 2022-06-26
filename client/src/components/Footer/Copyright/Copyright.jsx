import React from 'react';
import classes from './Copyright.module.css';
import data from './CopyrightData';
import { Link } from 'react-router-dom';
const Copyright = (props) => {
  const {paymentMethods, social} = data;
  return (
    <div className={classes.container}>
      <div className={classes.item}>
        {
          social.map((item, index) => {
            return (
              <Link to={item.to} key={index} className={classes.icon + ' ' + classes.social}>
                <img src={item.icon} alt="icon" />
              </Link>
            )
          })
        }
      </div>
      <div className={classes.item}>
        {
          paymentMethods.map((item, index) => {
            return (
              <Link to={item.to} key={index} className={classes.icon + ' ' + classes.payment}>
                <img src={item.icon} alt="icon" />
              </Link>
            )
          })
        }
      </div>
      <p className={classes.copyright}>Copyright © 2022 Shop Pty. Ltd.</p>
    </div>
  );
};

export default Copyright;