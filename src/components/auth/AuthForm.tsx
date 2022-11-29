/* eslint-disable no-console */
/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { login, register } from '../../lib/api/auth';

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
  const [passwordValid, setPasswordValid] = useState({
    format: true,
    confirm: true,
    message: '',
    first: true,
  });

  const validateInputs = (email: string, password: string, passwordConfirm: string) => {
    const regExpEmail = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    const eValid = regExpEmail.test(email);
    setEmailValid(eValid);

    const regExpPassword = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{6,16}$/;
    const format = regExpPassword.test(password);
    const confirm = password === passwordConfirm;

    setPasswordValid({ ...passwordValid, first: false });
    switch (true) {
      case password === passwordConfirm && format:
        setPasswordValid({ ...passwordValid, format, confirm, message: '' });
        break;
      case format === true && confirm === false:
        setPasswordValid({ ...passwordValid, format, confirm, message: '비밀번호가 일치하지 않습니다.' });
        break;
      case format === false && confirm === true:
        setPasswordValid({ ...passwordValid, format, confirm, message: '비밀번호가 유효하지 않습니다.' });
        break;
      case format === false && confirm === false:
        setPasswordValid({ ...passwordValid, format, confirm, message: '비밀번호가 유효하지 않습니다.' });
        break;
      default:
        break;
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

    if (type === 'login') {
      if (emailValid && !passwordValid.first) {
        console.log('login');
        // login({ email, password });
      }
    }
    if (type === 'register') {
      if ((emailValid && passwordValid.format && passwordValid.confirm, !passwordValid.first)) {
        console.log('register');
        // register({ email, password });
      }
    }
  };
  return (
    <>
      <div>
        <h2>{type === 'register' ? "You're now part of COSIKIN." : 'Welcome back to COSIKIN :)'}</h2>
        <p>Sign in to view more information.</p>
      </div>
      <h1>{text}</h1>
      <form onSubmit={onSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
        <input type="text" name="email" placeholder="Email" onChange={onChange} value={email} />
        {emailValid === false ? '이메일 양식이 올바르지 않습니다.' : null}
        <input
          type={passwordView ? 'text' : 'password'}
          name="password"
          placeholder={type === 'register' ? 'Password (특수문자, 영문, 숫자 포함 6-16자)' : 'Password'}
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
        {type === 'register' && passwordValid.message ? passwordValid.message : null}
        {type === 'register' && (
          <span>
            <input type="checkbox" name="passwordShow" onChange={passwordToggle} />
            Show Password
          </span>
        )}
        {type === 'login' && <Link to="/비밀번호찾기~">Forgot Password?</Link>}
        <button>{text}</button>
      </form>
    </>
  );
}

export default AuthForm;
