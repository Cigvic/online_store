import React, {useEffect, useContext, useState} from 'react';
import Header from 'components/Header/Header';
import Footer from './components/Footer/Footer';
import { BrowserRouter } from 'react-router-dom';

import AppRouter from 'components/AppRouter';
import { Context } from 'index';
import jwt_decode from 'jwt-decode';
import userService from './services/userService';
import Loader from './components/UI/Loader/Loader';


function App() {
  const {user} = useContext(Context)
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    userService.checkToken()
    .then((res) => {
      user.setIsAuth(true);
      user.setUser(jwt_decode(localStorage.getItem('token')));
      console.log('Authorized', user.user);
    })
    .catch((e) => {
      if (e.request.status === 401) {
        localStorage.clear();
        user.setIsAuth(false);
        user.setUser({});
        console.log('Unauthorized');
      }
    })
    .finally(() => setIsLoading(false))
  }, [])
  return (
    (isLoading) 
    ? <div style={{width: '100wh', height: '100vh', display: 'flex', justifyContent:'center', alignItems:'center'}}>
        <Loader/>
      </div> 
    : <BrowserRouter>
        <Header />
        <AppRouter/>
        <Footer />
      </BrowserRouter>
  );
}

export default App;
