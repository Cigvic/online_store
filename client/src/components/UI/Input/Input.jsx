import React from 'react';
import './Input.css';

const Input = ({className, type = 'text', placeholder = '', id, ...props}) => {
  return (
    <input className={className} type={type} placeholder={placeholder} id={id}/>
  );
};

export default Input;