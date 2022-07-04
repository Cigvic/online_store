import Container from 'components/Container/Container';
import React from 'react';
import H3 from '../H3/H3';
import classes from './Contacts.module.css';

const Contacts = () => {
  return (
    <Container className={classes.container}>
      <div className={classes.row}>
        <span className={classes.icon}></span>
        <div className={classes.textblock}>
          <H3>Address:</H3>
          <p className={classes.text}>1234 Street Adress City Address, 1234</p>
        </div>
      </div>
      <div className={classes.row}>
        <span className={classes.icon}></span>
        <div className={classes.textblock}>
          <H3>Phone:</H3>
          <p className={classes.text}>(00)1234 5678</p>
        </div>
      </div>
      <div className={classes.row}>
        <span className={classes.icon}></span>
        <div className={classes.textblock}>
          <H3>We are open:</H3>
          <p className={classes.text}>
            Monday - Thursday: 9:00 AM - 5:30 PM<br/>
            Friday 9:00 AM - 6:00 PM<br/>
            Saturday: 11:00 AM - 5:00 PM
          </p>
        </div>
      </div>
      <div className={classes.row}>
        <span className={classes.icon}></span>
        <div className={classes.textblock}>
          <H3>E-mail:</H3>
          <a className={classes.link} href='mailto:shop@email.com'>shop@email.com</a>
        </div>
      </div>
    </Container>
  );
};

export default Contacts;