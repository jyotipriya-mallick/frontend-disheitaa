import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom'

import Navbar from './components/Navbar.js'
import Footer from './components/Footer.js'
import './App.css'

import Home from './pages/Home.js'
import Staff from './pages/Staff.js'
import Report from './pages/Report.js'
import Login from './pages/Login.js'


const NavbarAndFooter = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';
  return (
    <>
      {!isLoginPage && <Navbar />}
      <Routes>
        <Route path="/"       element = { <Home  />} />
        <Route path="/staff"  element = { <Staff />} />
        <Route path="/report" element = { <Report/>} />
        <Route path="/login"  element = { <Login />} />
        <Route path="/signup" element = { <Login />} />
        <Route path="/logout" element = { <Home  />} />
      </Routes>
      {!isLoginPage && <Footer />}
    </>
  );
};

function App() {
  return (
    <div className="App">
      <Router>
        <NavbarAndFooter />
      </Router>
    </div>
  );
}

export default App; 
