import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { getCookie } from '../cookieUtils'

import HomeIcon from '@mui/icons-material/Home'
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount'
import PestControlIcon from '@mui/icons-material/PestControl'
import LoginIcon from '@mui/icons-material/Login'
import LogoutIcon from '@mui/icons-material/Logout'

function Navbar({
                    isLoggedIn,
                    setIsLoggedIn,
                    userName
                })
{
    const navigate = useNavigate();
    const handleLogout = async () => {
        try {
            const csrftoken = getCookie('csrftoken'); // Implement getCookie function to extract the CSRF token from cookies.
            const response = await fetch('/logout/', {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': csrftoken,
                },
                credentials: 'include',
            });
            const data = await response.json();
            console.log(data.message);
            navigate('/');
        } catch (error) {
            console.error('Error during logout:', error);
        }
    };

    return (
        <div>
            <nav className='main-nav'>
                <div className='nav'>
                    <ul>
                        <li className='nav-options'>
                            <Link to="/"> <HomeIcon /> Home</Link>
                        </li>
                        <li className='nav-options'>
                            <Link to="/staff"> <SupervisorAccountIcon /> Staff</Link>
                        </li>
                        <li className='nav-options'>
                            <Link to="/report"> <PestControlIcon /> Report</Link>
                        </li>
                        {isLoggedIn ?
                            <li className='nav-options'
                                onClick={ () => {
                                    setIsLoggedIn(false);
                                    handleLogout();
                                }}
                            >
                                <Link to="/logout"> <LogoutIcon />{ userName }</Link>
                            </li> :
                            <li className='nav-options'>
                                <Link to="/login"> <LoginIcon /> Login</Link>
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