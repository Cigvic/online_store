import React, {useContext} from 'react';
import Home from 'pages/Home';
import {Routes, Route} from 'react-router-dom';
import { authRoutes, publicRoutes } from './../routes';
import NotFound from './../pages/NotFound';
import { Context } from 'index';

const AppRouter = () => {
  
  const {user} = useContext(Context)

  return (
    <Routes>
      {user.isAuth 
      ? authRoutes.map(({path, Component}) => {
        return (
          <Route
            key={path}
            path={path}
            element={Component()}
          />

        )
      })
      : publicRoutes.map(({path, Component}) => {
        return (
          <Route
            key={path}
            path={path}
            element={Component()}
          />

        )
      })
      
      }   
      <Route
        index
        element={<Home/>}
      />
      <Route
        path="*"
        element={<NotFound/>}
      />
    </Routes>
  );
};

export default AppRouter;