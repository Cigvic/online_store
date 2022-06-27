import React from 'react';
import classes from './Container.module.css';
const Container = ({children, className, ...props}) => {

    const classArr = [],
          mixClasses = [];
    className.split(' ').forEach(classItem => {
      (classes[classItem]) ? classArr.push(classes[classItem]) : mixClasses.push(classItem);
    });

      (mixClasses.length) ? classArr.push(...mixClasses) : console.log();
    return (
      <div className={classArr.join(' ')}>
        {children}
      </div>
    );
};

export default Container;