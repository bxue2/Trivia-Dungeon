import React from 'react';
import { useHistory } from 'react-router-dom';
import LogoutButton from './LogoutButton';
import { useSelector, useDispatch } from 'react-redux';
import {login} from '../../store/session'

import './NavBar.css'
import LoginModal from './LoginModal';
import SignUpModal from './SignUpModal';

const NavBar = () => {
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();
  const history = useHistory();
  const goHome = () => {
    history.push('/')
  }

  const demoLogin = () => {
    dispatch(login('demo@aa.io', 'password'))
  }

  let authButtons = (
    <>
      <button className='demo-button' onClick={demoLogin}>
        Demo
      </button>
      <LoginModal />
      <SignUpModal />
    </>
  )
  if(user){
    authButtons = (
      <>
        <LogoutButton />
      </>
    )
  }
  return (
    <nav>
      <div className='nav-logo' onClick={goHome}/>
      <div className='nav-filler'/>
      <div className='nav-right-container'>
        {authButtons}
      </div>
    </nav>
  );
}

export default NavBar;
