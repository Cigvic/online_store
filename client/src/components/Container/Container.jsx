import React from 'react';
import './Container.css'

const Container = (props) => {
  if (props.isFlexNeeded === 'true') {
    return (
      <div className='Container Flex-container'>
        {props.children}
      </div>
    );
  } else {
    return (
      <div className='Container'>
        {props.children}
      </div>
    );
  }
  
};

export default Container;