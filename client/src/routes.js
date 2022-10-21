import {  CONTACT_US_ROUTE, ABOUT_US_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, TERMS_AND_CONDITIONS_ROUTE, DASHBOARD_ROUTE, DEVICE_ROUTE, BASKET_ROUTE } from './utils/consts';

import ContactUs from './pages/ContactUs';
import AboutUs from './pages/AboutUs';
import Login from './pages/Login';
import Registration from './pages/Registration';
import Rules from './pages/Rules';
import Dashboard from './pages/Dashboard';
import Device from './pages/Device';
import Basket from './pages/Basket';

export const authRoutes = [

  {
    path: DASHBOARD_ROUTE,
    Component: Dashboard
  },
  {
    path: BASKET_ROUTE,
    Component: Basket
  },
  {
    path: CONTACT_US_ROUTE,
    Component: ContactUs
  },
  {
    path: ABOUT_US_ROUTE,
    Component: AboutUs
  },
  {
    path: TERMS_AND_CONDITIONS_ROUTE,
    Component: Rules
  },
  {
    path: DEVICE_ROUTE + '/:id',
    Component: Device
  }
]

export const publicRoutes = [
  {
    path: CONTACT_US_ROUTE,
    Component: ContactUs
  },
  {
    path: ABOUT_US_ROUTE,
    Component: AboutUs
  },
  {
    path: LOGIN_ROUTE,
    Component: Login
  },
  {
    path: REGISTRATION_ROUTE,
    Component: Registration
  },
  {
    path: TERMS_AND_CONDITIONS_ROUTE,
    Component: Rules
  },
  {
    path: DEVICE_ROUTE + '/:id',
    Component: Device
  }
]