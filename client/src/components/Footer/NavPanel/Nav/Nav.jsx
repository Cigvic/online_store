import React from 'react';
import classes from './Nav.module.css';
import { Link } from 'react-router-dom';

const Nav = ({title, links, ...props}) => {
  return (
    <div className={classes.container}>
      <h4 className={classes.title}>{title}</h4>
      <nav className={classes.list}>
        {
          links.map((item, index) => {
            return (
              <li className={classes.item} key={index}>
              <Link to={item.to} className={classes.link}>
                {item.text}
              </Link>
              </li>
            )
          })
        }
      </nav>
  </div>
  );
};

export default Nav;