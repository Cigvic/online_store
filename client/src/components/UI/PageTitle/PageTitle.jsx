import React from 'react';
import classes from './PageTitle.module.css';
const PageTitle = ({children, className = '', ...props}) => {

  (className) ? className = classes.h2 + className : className = classes.h2;

  return (
    <h2 className={className}>
      {
        children
      }
    </h2>
  );
};

export default PageTitle;