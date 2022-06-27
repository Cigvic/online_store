import React from 'react';
import classes from './H3.module.css';

const H3 = ({children, className = '', ...props}) => {
  (className) ? className = classes.h3 + className : className = classes.h3
  return (
    <h3 className={className}>
      {children}
    </h3>
  );
};

export default H3;