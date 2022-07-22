import React, {useEffect, useContext} from 'react';
import Header from 'components/Header/Header';
import Footer from './components/Footer/Footer';
import { BrowserRouter } from 'react-router-dom';

import AppRouter from 'components/AppRouter';
import { Context } from 'index';
import jwt_decode from 'jwt-decode';
import userService from './services/userService';


function App() {
  const {user} = useContext(Context)
  useEffect(() => {
    userService.checkToken()
    .then(() => {
      user.setIsAuth(true);
      user.setUser(jwt_decode(localStorage.getItem('token')));
      console.log('Authorized');
    })
    .catch(() => {
      user.setIsAuth(false);
      user.setUser({});
      console.log('Unauthorized')
    })
  })
  return (
    <BrowserRouter>
        <Header />
          <AppRouter/>
        <Footer />
    </BrowserRouter>
  );
}

export default App;
