import React from 'react';
import './Input.css';

const Input = ({className, type = 'text', placeholder = '', id, required = false, value = '', ...props}) => {

  return (
    <input onChange={props.onChange} className={className} type={type} placeholder={placeholder} id={id} required={required} value={value}/>
  );
};

export default Input;