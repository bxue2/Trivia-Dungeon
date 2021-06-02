import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';

import './NavBar.css'

const NavBar = () => {
  const history = useHistory();
  const goHome = () => {
    history.push('/')
  }

  const openLogin = () => {

  }

  return (
    <nav>
      <div className='nav-logo' onClick={goHome}/>
      <div className='login-button' onClick={openLogin} >Login</div>
    </nav>
  );
}

export default NavBar;
