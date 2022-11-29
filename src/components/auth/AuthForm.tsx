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
  });

  const validateInputs = (email: string, password: string, passwordConfirm: string) => {
    const re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    const regExpPassword = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{6,16}$/;
    const valid = re.test(email);
    setEmailValid(valid);

    if (password !== passwordConfirm) {
      setPasswordValid({ ...passwordValid, confirm: false, message: '비밀번호가 일치하지 않습니다.' });
    } else {
      setPasswordValid({ ...passwordValid, confirm: true, message: '' });
    }
    if (regExpPassword.test(password)) {
      setPasswordValid({ ...passwordValid, format: true });
    } else {
      setPasswordValid({ ...passwordValid, format: false, message: '비밀번호 형식에 맞춰주세요.' });
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
      if (emailValid) {
        console.log('login');
        // login({ email, password });
      }
    }
    if (type === 'register') {
      if (emailValid && passwordValid.format && passwordValid.confirm) {
        console.log('register');
        // register({ email, password });
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
        {type === 'register' && (passwordValid.confirm === false || passwordValid.format === false)
          ? passwordValid.message
          : null}
        {type === 'login' && <Link to="/아직 모릅니다">Forgot Password?</Link>}
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
