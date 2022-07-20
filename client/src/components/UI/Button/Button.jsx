import React from 'react';
import './Button.css';

const Button = ({children, type = 'button', className = '', onClick,...props}) => {
  className ? className = ' ' + className : className = '';
  
  return (
    
    <button className={'Button' + className}
// @ts-ignore
    type={type} 
    onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;