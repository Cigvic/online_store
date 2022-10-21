import React, {useState } from 'react';
import Loader from '../Loader/Loader';
import classes from './Tabs.module.css';

const Tabs = ({headers, update, state, ...props}) => {
  const [active, setActive] = useState(0);
  const {Loading}= state;
  function toggleTab (e, index, config) {
    setActive(index);
    update(config)
  }

  return (
    <div className={classes.nav}>
      {
        (Loading) ? <Loader /> : headers.map((item, index) => {
          return (
            <button 
            className={`${classes.tabLink} ${(index === active) && classes.tabLinkActive}`} 
            key={index} 
            onClick={(e) => { toggleTab(e, index, item.config) }}
            >{item.title}</button>
          )
        })
      }
    </div>
  );
};

export default Tabs;