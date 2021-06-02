import React from 'react';
import { useHistory } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import { useDispatch } from 'react-redux';

import './NavBar.css'
import LoginModal from './LoginModal';
import SignUpModal from './SignUpModal';

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
      <LoginModal />
      <SignUpModal />
      <LogoutButton />
    </nav>
  );
}

export default NavBar;
