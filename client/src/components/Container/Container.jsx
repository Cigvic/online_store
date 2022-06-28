import React from 'react';
import classes from './Container.module.css';
const Container = ({children, className, ...props}) => {

    const classArr = [],
          mixClasses = [];
    className.split(' ').forEach(classItem => {
      (classes[classItem]) ? classArr.push(classes[classItem]) : mixClasses.push(classItem);
    });

    if (mixClasses.length) classArr.push(...mixClasses);
    return (
      <div className={classArr.join(' ')}>
        {children}
      </div>
    );
};

export default Container;