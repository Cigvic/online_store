import React from 'react';
import './Container.css'

const Container = ({children, className, ...props}) => {
    return (
      <div className={className}>
        {children}
      </div>
    );
};

export default Container;