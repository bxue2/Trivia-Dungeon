import React from 'react';
import { useHistory } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import { useSelector } from 'react-redux';

import './NavBar.css'
import LoginModal from './LoginModal';
import SignUpModal from './SignUpModal';

const NavBar = () => {
  const user = useSelector(state => state.session.user);
  const history = useHistory();
  const goHome = () => {
    history.push('/')
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
