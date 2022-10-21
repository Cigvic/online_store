import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import App from './App';
import UserStore from './store/UserStore.js';
import CartStore from './store/CartStore';

export const Context = createContext(null)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Context.Provider value = {
    {
      user: new UserStore(),
      basket: new CartStore()
    }
  }>
    <App />
  </Context.Provider>
);
