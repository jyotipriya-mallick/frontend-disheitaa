import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import HomeIcon from '@mui/icons-material/Home'
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount'
import PestControlIcon from '@mui/icons-material/PestControl'
import LoginIcon from '@mui/icons-material/Login'
import LogoutIcon from '@mui/icons-material/Logout'

function Navbar({isLoggedIn, setIsLoggedIn}) {
    console.log({isLoggedIn});
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
                            <li className='nav-options' onClick={ ()=> setIsLoggedIn(false) }>
                                <Link to="/logout"> <LogoutIcon /> Logout</Link>
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