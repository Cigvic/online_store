import React from 'react';
import Home from './pages/Home';
import Header from 'components/Header/Header';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from './pages/Login';
import Rules from './pages/Rules';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';


function App() {
  return (
    <BrowserRouter>
        <Header />
          <Routes>
            <Route 
              path="/login" 
              element={<Login/>}
            />
            <Route 
              path="/contact-us" 
              element={<ContactUs/>}
            />
            <Route 
              path="/about-us" 
              element={<AboutUs/>}
            />
            <Route
              path='/terms-and-conditions'
              element={<Rules/>}
            />
            <Route
              index
              element={<Home/>}
            />
          </Routes>
        <Footer />
    </BrowserRouter>
  );
}

export default App;
