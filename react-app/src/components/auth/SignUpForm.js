import React, { useState } from "react";
import { signUp } from '../../store/session';
import {useDispatch} from 'react-redux';

import './Forms.css'

const SignUpForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      dispatch(signUp(username, email, password));
    }
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  return (
    <form className='signup-form' onSubmit={onSignUp}>
      <div className='signup-form-field'>
        <label>User Name</label>
        <input
          type="text"
          name="username"
          onChange={updateUsername}
          placeholder={'Username'}
          value={username}
        ></input>
      </div>
      <div className='signup-form-field'>
        <label>Email</label>
        <input
          type="text"
          name="email"
          onChange={updateEmail}
          placeholder={'Email'}
          value={email}
        ></input>
      </div>
      <div className='signup-form-field'>
        <label>Password</label>
        <input
          type="password"
          name="password"
          onChange={updatePassword}
          placeholder={'Password'}
          value={password}
        ></input>
      </div>
      <div className='signup-form-field'>
        <label>Confirm Password</label>
        <input
          type="password"
          name="repeat_password"
          onChange={updateRepeatPassword}
          placeholder={'Confirm Password'}
          value={repeatPassword}
          required={true}
        ></input>
      </div>
      <button className='signup-submit' type="submit">Sign Up</button>
    </form>
  );
};

export default SignUpForm;
