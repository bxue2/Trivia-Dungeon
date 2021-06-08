import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import LogoutButton from './LogoutButton';
import { useSelector, useDispatch } from 'react-redux';
import {login} from '../../store/session'

import './NavBar.css'
import LoginModal from './LoginModal';
import SignUpModal from './SignUpModal';

const NavBar = () => {
  const user = useSelector(state => state.session.user);
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();
  const goHome = () => {
    history.push('/')
  }

  const demoLogin = () => {
    dispatch(login('demo@aa.io', 'password'))
  }

  const submitSearch = (e) => {
    e.preventDefault();
    history.push(`/search?query=${search}`)
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
      <form className='search-div' onSubmit={(e) => submitSearch(e)}>
        <input className='search-bar'
          placeholder='Search questions'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          />
        <button type='submit' className='search-button'>Search</button>
      </form>
      <div className='nav-filler'/>
      <div className='nav-right-container'>
        {authButtons}
      </div>
    </nav>
  );
}

export default NavBar;
