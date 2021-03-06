import React, { useState } from "react";
import { login } from "../../store/session";
import { useDispatch } from 'react-redux';

import './Forms.css'

const LoginForm = () => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data.errors) {
      setErrors(data.errors);
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className='form-container'>
      <h1 className='modal-title'>Log In</h1>
      <form className='login-form' onSubmit={onLogin}>
        <div>
          {errors.map((error, idx) => (
            <div className='auth-form_error-list' key={idx}>{error[0].toUpperCase() + error.slice(1)}</div>
          ))}
        </div>
        <div className='login-form-field'>
          <label htmlFor="email">Email/Username</label>
          <input
            name="email"
            type="text"
            placeholder="Email/Username"
            value={email}
            onChange={updateEmail}
          />
        </div>
        <div className='login-form-field'>
          <label htmlFor="password">Password</label>
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={updatePassword}
          />
        </div>
        <button className='login-submit' type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
