import React from 'react';
import './Button.css';

const Button = ({children, type = 'button', className = '',...props}) => {
  className = className ?  ' ' + className : '';
  
  return (
    
    <button className={'Button' + className}
// @ts-ignore
    type={type} 
    >
      {children}
    </button>
  );
};

export default Button;