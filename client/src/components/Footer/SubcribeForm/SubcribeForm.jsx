import React from 'react';
import Button from '../../UI/Button/Button';
import Input from '../../UI/Input/Input';
import classes from './SubcribeForm.module.css';

const SubcribeForm = () => {
  return (
    <form className={classes.form}>
      <div>
        <h2 className={classes.title}>Sign Up To Our Newsletter.</h2>
        <p className={classes.text}>Be the first to hear about the latest offers.</p>
      </div>
      <div className={classes.controlBlock}>
        <Input className='Input Input__dark-theme' type='email' placeholder='Your Email' required/>
        <Button className={classes.submitBtn}> 
          Subscribe
        </Button>
      </div>
    </form>
  );
};

export default SubcribeForm;