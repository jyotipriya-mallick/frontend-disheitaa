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


const NavbarAndFooter = ({
                            isLoggedIn,
                            setIsLoggedIn,
                            userName,
                            setUserName
                          }
                        ) =>
{
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';
  return (
    <>
      { !isLoginPage &&
        <Navbar
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
          userName = { userName }
        />
      }
      <Routes>
        <Route path="/"       element = { <Home  />} />
        <Route path="/staff"  element = { <Staff />} />
        <Route path="/report" element = { <Report/>} />
        <Route path="/login" element  = { <Login
                                            setIsLoggedIn={setIsLoggedIn}
                                            setUserName={setUserName}
                                          />
                                        } />
        <Route path="/signup" element = { <Login />} />
        <Route path="/logout" element = { <Home  />} />
      </Routes>
      {!isLoginPage && <Footer />}
    </>
  );
};

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const storedIsLoggedIn = Cookies.get('isLoggedIn');
    const storedUserName = Cookies.get('userName');
    if (storedIsLoggedIn === 'true') {
      setIsLoggedIn(true);
    }
    if (storedUserName !== undefined) {
      setUserName(storedUserName);
    }
  }, []);

  useEffect(() => {
    Cookies.set('isLoggedIn', isLoggedIn.toString(), { expires: 7 }); // Store isLoggedIn for 7 days
    Cookies.set('userName', userName.toString(), { expires: 7 });
  }, [isLoggedIn, userName]);


  return (
    <div className="App">
      <Router>
        <NavbarAndFooter
          isLoggedIn = { isLoggedIn }
          setIsLoggedIn = { setIsLoggedIn }
          userName = { userName }
          setUserName = { setUserName }
        />
      </Router>
    </div>
  );
}

export default App; 
