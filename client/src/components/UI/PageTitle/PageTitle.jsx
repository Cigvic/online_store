import React from 'react';
import classes from './PageTitle.module.css';
const PageTitle = ({children, className = '', ...props}) => {

  (className) ? className = classes.h1 + className : className = classes.h1;

  return (
    <h1 className={className}>
      {
        children
      }
    </h1>
  );
};

export default PageTitle;