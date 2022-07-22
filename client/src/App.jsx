import React, {useEffect, useContext} from 'react';
import Header from 'components/Header/Header';
import Footer from './components/Footer/Footer';
import { BrowserRouter } from 'react-router-dom';

import AppRouter from 'components/AppRouter';
import { Context } from 'index';


function App() {
  const {user} = useContext(Context)
  useEffect(() => {
    user.setUser({})
    user.setIsAuth(false);
  }, [])
  return (
    <BrowserRouter>
        <Header />
          <AppRouter/>
        <Footer />
    </BrowserRouter>
  );
}

export default App;
