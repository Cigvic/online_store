import React from 'react';
import classes from './ShopInfo.module.css'

const ShopInfo = (props) => {
  return (
    <div className={classes.container} onMouseLeave={() => props.onMouseLeave(false)}>
      <div className={classes.wrapper}>
        <div className={classes['working-time']}>
          <svg className='ShopInfo__clock' width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.5 28.85C11.2429 28.85 6.15 23.7571 6.15 17.5C6.15 11.2429 11.2429 6.15 17.5 6.15C23.7571 6.15 28.85 11.2429 28.85 17.5C28.85 23.7571 23.7571 28.85 17.5 28.85Z" stroke="#0156FF" strokeWidth="2.3"/>
            <path d="M17.5 12.25V18.375H23.625" stroke="#0156FF" strokeWidth="2.3" strokeLinecap="round"/>
          </svg>
          <div className={classes['text-block']}>
            <p className={`'${classes.paragraph} ${classes['paragraph_first-row']}`}>We are open:</p>
            <p className={classes['info-text']}><span className={classes['grey-text']}>Mon-Thu:</span>  9:00 AM - 5:30 PM</p>
            <p className={classes['info-text']}><span className={classes['grey-text']}>Fr:</span>  9:00 AM - 6:00 PM</p>
            <p className={classes['info-text']}><span className={classes['grey-text']}>Sat:</span>  11:00 AM - 5:00 PM</p>
          </div>
          </div>
          <div className={classes.address}>
            <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17 17C15.625 17 14.5 15.92 14.5 14.6C14.5 13.28 15.625 12.2 17 12.2C18.375 12.2 19.5 13.28 19.5 14.6C19.5 15.92 18.375 17 17 17ZM24.5 14.84C24.5 10.484 21.1875 7.4 17 7.4C12.8125 7.4 9.5 10.484 9.5 14.84C9.5 17.648 11.9375 21.368 17 25.808C22.0625 21.368 24.5 17.648 24.5 14.84ZM17 5C22.25 5 27 8.864 27 14.84C27 18.824 23.6625 23.54 17 29C10.3375 23.54 7 18.824 7 14.84C7 8.864 11.75 5 17 5Z" fill="#0156FF"/>
            </svg>
            <p className={classes.paragraph}>Address: 1234 Street Adress, City Address, 1234</p>
          </div>
          <div className={classes.phone}>
            <p className={classes.paragraph}>Phones: (00) 1234 5678</p>
            <p className={classes.paragraph}>E-mail: <a href="mailto:shop@email.com">shop@email.com</a></p>
          </div>
      </div>
    </div>
  );
};

export default ShopInfo;