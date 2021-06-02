import React, { useState } from "react";
import { login } from "../../store/session";
import { useDispatch } from 'react-redux';

import './Forms.css'

const LoginForm = ({setShowModal}) => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const onLogin = async (e) => {
    e.preventDefault();
    const data = dispatch(login(email, password));
    if (data.errors) {
      setErrors(data.errors);
    }
    else{
      setShowModal(false);
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <form className='login-form' onSubmit={onLogin}>
      <div>
        {errors.map((error) => (
          <div>{error}</div>
        ))}
      </div>
      <div>
        <label htmlFor="email">Email/Username</label>
        <input
          name="email"
          type="text"
          placeholder="Email"
          value={email}
          onChange={updateEmail}
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={updatePassword}
        />
        <button className='login-submit' type="submit">Login</button>
      </div>
    </form>
  );
};

export default LoginForm;
