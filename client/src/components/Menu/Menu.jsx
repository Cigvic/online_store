import {useState} from 'react';
import './Menu.css';
import Container from './../Container/Container';
import {Link} from 'react-router-dom';

const Menu = ({items}, ...props) => {
  const [element, setElement] = useState ([renderMenuItems (items)]),
        [productCount, setProductCount] = useState(0);

  function renderMenuItems(items) {
    return(
      <menu key="menu" className='Menu__list'>
        {
          items.map((item, index) => {
          return (<li key={index + 1} className='Menu__item'>
                    <a className='Menu__link' href={item.link}>{item.title}</a>
                  </li>)
            } 
          )
        }
        <li className='Menu__item' key="lul">
          <button className='Menu__btn'>Our Deals</button>
        </li>
      </menu>
      
    )
  }

  function renderSearchInput () {
    return (<input type="text" className='search-input' key='1' placeholder='Search entiere store here...'/>)
  }
  
  function renderProductCount () {
    if (productCount) {
      return <div className='user-nav__basket-count'>{productCount}</div>
    }
  }
  return (
    <div className='Menu'>
      <Container className='default flex justify-space-between align-center'>
        <div className='Menu__container'>
        <Link to='/home'>
          <svg width="34" height="41" viewBox="0 0 34 41" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.0331 0.945374L0.296875 10.8637V23.0708L17.0331 32.9891L30.4588 25.3596V28.9836L17.0331 36.9946L0.296875 26.8855V31.2725L17.0331 41L33.7693 31.2725V19.0653L20.3435 26.8855V23.0708L33.7693 15.0599V10.8637L17.0331 0.945374Z" fill="#0156FF"/>
          </svg>
        </Link>
          { 
            element
          }
        </div>
        <div className='user-nav'>
          <button className='user-nav__show-search-bar' onClick={e => {
          // @ts-ignore
          const classList = e.target.classList;
            classList.toggle('user-nav__show-search-bar_active');

            setElement(classList.contains('user-nav__show-search-bar_active') 
            ? [renderSearchInput()] 
            : [renderMenuItems(items)]
            )}}>

          </button>
          <button className='user-nav__basket' onClick={e => setProductCount(productCount + 1)}>
            {renderProductCount()}
          </button>
          <Link to='/login'>
            <button className='user-nav__profile'></button>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default Menu;