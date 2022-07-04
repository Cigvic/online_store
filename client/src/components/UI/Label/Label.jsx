import React from 'react';
import classes from './Label.module.css';
const Label = ({children, isRequired = '', htmlFor, ...props}) => {
  let required;
  isRequired ? required = <span className={classes.required}> * </span> : required = '';

  return (
    <label className={classes.label} htmlFor={htmlFor}>
      {children}
      {required}
    </label>
  );
};

export default Label;