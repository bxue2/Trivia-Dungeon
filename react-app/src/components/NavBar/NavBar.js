import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';

import './NavBar.css'

const NavBar = () => {
  const history = useHistory();
  const goHome = () => {
    history.push('/')
  }

  return (
    <nav>
      <div className='nav-logo' onClick={goHome}/>

    </nav>
  );
}

export default NavBar;
