import React from 'react';
import Home from './pages/Home';
import Header from 'components/Header/Header';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from './pages/Login';


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
              path='/home'
              element={<Home/>}
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
