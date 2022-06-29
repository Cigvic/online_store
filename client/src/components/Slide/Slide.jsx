import React from 'react';
import classes from './Slide.module.css';  
import Container from './../Container/Container';

const Slide = ({theme, config, ...props}) => {
  const styles = {
    wrapper: classes.wrapper,
    img: classes.img
  };
  if (theme === 'light') {
    styles.wrapper = styles.wrapper + " " + classes['wrapper_theme_light'];
    styles.img =  styles.img + " " +  classes['img_order_first'];
  } else if (theme === 'dark') styles.wrapper = styles.wrapper + " " +  classes['wrapper_theme_dark']; 

  return (
    <Container className={`full-width default flex all-center ${styles.wrapper}`}>
      <Container className={`default flex align-center justify-space-around`}>
        <div className={classes.textblock}>
          <h2 className={classes.header}>{config.header}</h2>
          {config.text.map((p, index) => {
            return (
              <p key={index} className={classes.text}>{p}</p>
            )
          })}
        </div>
        <img src={config.img.src} alt={config.img.alt} className={`${classes.img} ${styles.img}`}/>
      </Container>
    </Container>
  );
};

export default Slide;