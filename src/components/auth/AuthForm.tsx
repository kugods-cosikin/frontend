/* eslint-disable react/button-has-type */
import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface Props {
  type: string;
}

function AuthForm({ type }: Props) {
  const text = type === 'login' ? 'Sign in' : 'Sign up';

  const [inputs, setInputs] = useState({
    email: '',
    password: '',
    passwordConfirm: '',
  });
  const { email, password, passwordConfirm } = inputs;

  const [passwordView, setPasswordView] = useState(false);
  const [emailValid, setEmailValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);

  const validateInputs = (email: string, password: string, passwordConfirm: string) => {
    const re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    const valid = re.test(email);
    setEmailValid(valid);
    if (password.length < 4) {
      setPasswordValid(false);
    }
    if (password !== passwordConfirm) {
      setPasswordValid(false);
    } else {
      setPasswordValid(true);
    }
  };
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };
  const passwordToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordView(e.target.checked);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    validateInputs(email, password, passwordConfirm);

    if (emailValid && passwordValid) {
      if (type === 'login') {
        axios
          .post('/auth/signin/apply', {
            email,
            password,
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
      }
      if (type === 'register') {
        axios
          .post('/auth/signup/apply', {
            email,
            password,
            passwordConfirm,
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    }
  };
  return (
    <>
      <div>
        <h2>{type === 'register' ? "You're now part of COSHIKIN." : 'Welcome back to COSHIKIN :)'}</h2>
        <p>Sign in to view more information.</p>
      </div>
      <h1>{text}</h1>
      <form onSubmit={onSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
        <input type="text" name="email" placeholder="Email" onChange={onChange} value={email} />
        {emailValid === false ? '이메일 양식이 올바르지 않습니다.' : null}
        <input
          type={passwordView ? 'text' : 'password'}
          name="password"
          placeholder="Password"
          onChange={onChange}
          value={password}
        />
        {type === 'register' && (
          <input
            type={passwordView ? 'text' : 'password'}
            name="passwordConfirm"
            placeholder="Confirm Password"
            onChange={onChange}
            value={passwordConfirm}
          />
        )}
        {passwordValid === false ? '비밀번호가 일치하지 않습니다!' : null}
        {type === 'login' && <Link to="/password..?">Forgot Password?</Link>}
        {type === 'register' && (
          <span>
            <input type="checkbox" name="passwordShow" onChange={passwordToggle} />
            Show Password
          </span>
        )}
        <button>{text}</button>
      </form>
    </>
  );
}

export default AuthForm;
