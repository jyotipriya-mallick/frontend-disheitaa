import React, {useState, useEffect} from 'react'
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom'
import Cookies from 'js-cookie'

import Navbar from './components/Navbar.js'
import Footer from './components/Footer.js'
import './App.css'

import Home from './pages/Home.js'
import Staff from './pages/Staff.js'
import Report from './pages/Report.js'
import Login from './pages/Login.js'


const NavbarAndFooter = ({ isLoggedIn, setIsLoggedIn }) => {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';
  return (
    <>
      {!isLoginPage && <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />}
      <Routes>
        <Route path="/"       element = { <Home  />} />
        <Route path="/staff"  element = { <Staff />} />
        <Route path="/report" element = { <Report/>} />
        <Route path="/login"  element = { <Login setIsLoggedIn={setIsLoggedIn}/>} />
        <Route path="/signup" element = { <Login />} />
        <Route path="/logout" element = { <Home  />} />
      </Routes>
      {!isLoginPage && <Footer />}
    </>
  );
};

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedIsLoggedIn = Cookies.get('isLoggedIn');
    if (storedIsLoggedIn === 'true') {
      setIsLoggedIn(true);
    }
  }, []);

  useEffect(() => {
    Cookies.set('isLoggedIn', isLoggedIn.toString(), { expires: 7 }); // Store isLoggedIn for 7 days
  }, [isLoggedIn]);

  return (
    <div className="App">
      <Router>
        <NavbarAndFooter isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      </Router>
    </div>
  );
}

export default App; 
