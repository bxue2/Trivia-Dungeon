import React, { useState } from "react";
import { signUp } from '../../store/session';
import {useDispatch} from 'react-redux';

import './Forms.css'

const SignUpForm = ({setShowModal}) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const data = await dispatch(signUp(username, email, password));
      if (data.errors) {
        setErrors(data.errors);
      }
      else{
        setShowModal(false);
      }
    }
    else{
      setErrors(["Password fields must match."])
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
    <div className='form-container'>
      <h1 className='modal-title'>Sign up</h1>
      <form className='signup-form' onSubmit={onSignUp}>
        <div>
          {errors.map((error, idx) => (
            <div className='auth-form_error-list' key={idx}>{error[0].toUpperCase() + error.slice(1)}</div>
          ))}
        </div>
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
    </div>
  );
};

export default SignUpForm;
