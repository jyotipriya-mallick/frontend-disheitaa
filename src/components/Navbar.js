import React from 'react'
import { Link } from 'react-router-dom'
import HomeIcon from '@mui/icons-material/Home'
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount'
import PestControlIcon from '@mui/icons-material/PestControl'
import LoginIcon from '@mui/icons-material/Login'
import LogoutIcon from '@mui/icons-material/Logout'

function Navbar() {
    var isLoggedIn = false;
    var setIsLoggedIn = () => {
        isLoggedIn = !isLoggedIn;
        console.log(isLoggedIn);
    }
    return (
        <div>
            <nav className='main-nav'>
                <div className='nav'>
                    <ul>
                        <li className='nav-options'>
                            <Link to="/"> <HomeIcon /> Home</Link>
                        </li>
                        <li className='nav-options'>
                            <Link to="/Staff"> <SupervisorAccountIcon /> Staff</Link>
                        </li>
                        <li className='nav-options'>
                            <Link to="/Report"> <PestControlIcon /> Report</Link>
                        </li>
                        {isLoggedIn ? 
                            <li className='nav-options' onClick={setIsLoggedIn}>
                                <Link to="/Logout"> <LogoutIcon /> Logout</Link>
                            </li> :
                            <li className='nav-options' onClick={setIsLoggedIn}>
                                <Link to="/Login"> <LoginIcon /> Login</Link>
                            </li>
                        }
                    </ul>
                </div>
                <div className='brand-name'>
                    <h1>DISH <span>ই</span>ITAA</h1>
                </div>
            </nav>
        </div>
    )
}

export default Navbar