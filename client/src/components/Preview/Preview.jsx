import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Preview.module.css';

const Preview = (props) => {
  return (
    <div style={{backgroundImage: `url(${props.background})`}} className={classes.container}>
      <h3 className={classes.title}>{props.title}</h3>
      <Link to='/' className={classes.link}>See All Products</Link>
    </div>
  );
};

export default Preview;