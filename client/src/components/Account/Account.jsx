import classes from './Account.module.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Account = ({setIsAccountMenuVisible, user}) => {
  const navigate = useNavigate();
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <nav className={classes.nav}>
          {
            (user.isAuth)
            ? 
            <>
                <li>
                  <Link 
                    className={classes.link} 
                    onClick={() => setIsAccountMenuVisible(false)} 
                    to='/dashboard'
                  >My Account</Link>
                </li>
                <li>
                  <Link 
                    className={classes.link} 
                    onClick={() => setIsAccountMenuVisible(false)} 
                    to='/'
                  >My Wishlist</Link>
                </li>
                <li>
                  <Link 
                    className={classes.link} 
                    onClick={() => setIsAccountMenuVisible(false)} 
                    to='/'
                    >Compare (0)</Link>
                </li>
                <li>
                  <Link 
                    className={classes.link} 
                    onClick={() => {
                      localStorage.clear();
                      user.setIsAuth(false);
                      user.setUser({});
                      setIsAccountMenuVisible(false);
                      navigate('/');
                      }} 
                    to='/'
                  >Log out</Link>
                </li>
              </>
            : <>
                <li>
                  <Link 
                    className={classes.link} 
                    to='/registration'
                    onClick={() => setIsAccountMenuVisible(false)}
                  >Create an Account</Link>
                </li>
                <li>
                  <Link 
                    className={classes.link} 
                    to='/login'
                    onClick={() => setIsAccountMenuVisible(false)}
                  >Sign In</Link>
                </li>
              </>
          }
        </nav>
      </div>
    </div>
  );
};

export default Account;