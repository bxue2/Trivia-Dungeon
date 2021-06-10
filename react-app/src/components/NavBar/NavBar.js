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
  const [searchType, setSearchType] = useState("questions");
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
    history.push(`/search?query=${search}&type=${searchType}`)
  }

  let authButtons = (
    <>
      <button className='demo-button auth_action-button' onClick={demoLogin}>
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
        <div className='search-row'>
          <select className='search-type' value={searchType} onChange={(e) => setSearchType(e.target.value)}>
            <option value='questions'>Questions</option>
            <option value='sets'>Sets</option>
          </select>
          <div className='search-div_divider'></div>
          <input className='search-bar'
            placeholder={searchType === 'questions' ? 'Search questions' : 'Search sets'}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            />
          {searchType === 'questions' &&
            <select className='search-bar_select-category'>
              <option value='all'>All</option>
            </select>}
          <button type='submit' className='search-button'>
            <i className="fas fa-search"></i>
          </button>
        </div>
      </form>
      <div className='nav-filler'/>
      <div className='nav-right-container'>
        {authButtons}
      </div>
    </nav>
  );
}

export default NavBar;
