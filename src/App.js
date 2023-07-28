import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom'

import Navbar from './components/Navbar.js'
import Footer from './components/Footer.js'
import './App.css'

import Home from './pages/Home.js'
import Staff from './pages/Staff.js'
import Report from './pages/Report.js'
import Login from './pages/Login.js'

// Custom component for rendering Navbar and Footer conditionally
const NavbarAndFooter = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === '/Login';

  return (
    <>
      {!isLoginPage && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Staff" element={<Staff />} />
        <Route path="/Report" element={<Report />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Logout" element={<Login />} />
      </Routes>
      {!isLoginPage && <Footer />}
    </>
  );
};

function App() {
  return (
    <div className="App">
      <Router>
        {/* Use the custom component instead of placing the components directly */}
        <NavbarAndFooter />
      </Router>
    </div>
  );
}

export default App; 
