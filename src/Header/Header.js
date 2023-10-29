// Header.js

import React from 'react';
import { Link , useLocation } from 'react-router-dom';
import Logo from '../../src/Icons/Logo.png'
import Resume from '../../src/Icons/Resume.svg'
import './Header.css'; 

function Header() {

    const location = useLocation();
 
  return (
    <header className="header">
    <div>
      <img src={Logo} alt="Logo" />
    </div>
   <nav className="nav">
        <ul className="nav-list">
          <li>
            <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
          </li>
          <li>
            <Link to="/register" className={location.pathname === '/register' ? 'active' : ''}>Register</Link>
          </li>
          <li>
            <Link to="/search" className={location.pathname === '/search' ? 'active' : ''}>Search</Link>
          </li>
        </ul>
      </nav>
      <div>
      <img src={Resume} alt="Logo" />
    </div>
  </header>
  );
}

export default Header;
