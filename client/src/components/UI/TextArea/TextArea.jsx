import React from 'react';
import classes from './TextArea.module.css';
const TextArea = ({id, placeholder, className, ...props}) => {
  return (
    <textarea className={`${className} ${classes.textarea}`} id={id} placeholder={placeholder}>
      
    </textarea>
  );
};

export default TextArea;