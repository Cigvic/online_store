import React from 'react';
import './Input.css';

const Input = ({className, type = 'text', placeholder = '', ...props}) => {
  return (
    <input className={className} type={type} placeholder={placeholder}/>
  );
};

export default Input;