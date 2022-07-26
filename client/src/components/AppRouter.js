import React, {useContext} from 'react';
import Home from 'pages/Home';
import {Routes, Route, Navigate} from 'react-router-dom';
import { authRoutes, publicRoutes } from './../routes';
import { Context } from 'index';
import { observer } from 'mobx-react-lite';

const AppRouter = observer(() => {
  
  const {user} = useContext(Context)

  return (
    <Routes>
      {
      user.isAuth
      ? authRoutes.map(({path, Component}) => {
        console.log('auth routes render');
        return (
          <Route
            key={path}
            path={path}
            element={Component()}
          />

        )
      })
      : publicRoutes.map(({path, Component}) => {
        console.log('unauth routes render')
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
        element={<Navigate to="/" replace />}
      />
    </Routes>
  );
})

export default AppRouter;