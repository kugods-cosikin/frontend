/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-nested-ternary */
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { login, register } from '../../lib/api/auth';
import palette from '../../lib/styles/palette';
import LogoTitle from '../common/LogoTitle';

const FullScreen = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
`;
const LeftBox = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-itmes: center;
  justify-content: center;
  background-color: ${palette.purple[2]};

  min-width: max-content;

  & div {
    width: 410px;
    weight: 700;
    margin: auto;
  }
  & h2 {
    font-size: 70px;
    margin: 0;
    padding: 0;
  }
  & p {
    height: 18px;
    width: 322px;
    font-size: 15px;
  }
`;
const RightBox = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-itmes: center;
  justify-content: center;

  min-width: max-content;

  & div {
    width: 393px;
    height: 700;
    margin: auto;
  }

  & form {
    margin-top: 15px;
  }

  & p {
    margin: 0 0 0 auto;
  }

  .errorMessage {
    margin-top: 0.5rem;
    margin-bottom: 0.25rem;
    font-size: 12px;
    color: ${palette.red[0]};
  }
`;
const StyledInput = styled.input`
  font-size: 15px;
  border-radius: 10px;
  border: 2px solid ${palette.gray[2]};
  padding-left: 10px;
  outline: none;
  width: 377px;
  height: 49px;
  maxlength: 22;
  & + & {
    margin-top: 1rem;
  }
`;
const StyledButton = styled.button`
  background: #784dc7;
  border-radius: 10px;
  width: 393px;
  height: 49px;
  border: none;
  color: white;
  font-size: 15px;
  margin-top: 15px;
`;

interface Props {
  type: string;
}

function AuthForm({ type }: Props) {
  const notInitialEmailRender = useRef(false);
  const notInitialPasswordRender = useRef(false);

  const text = type === 'login' ? 'Sign in' : 'Sign up';

  const [inputs, setInputs] = useState({
    email: '',
    password: '',
    passwordConfirm: '',
  });
  const { email, password, passwordConfirm } = inputs;

  const [passwordView, setPasswordView] = useState(false);
  const [emailValid, setEmailValid] = useState({
    format: false,
    message: '',
  });
  const [passwordValid, setPasswordValid] = useState({
    format: false,
    confirm: false,
    message: '',
  });

  const validateEmail = (email: string) => {
    const regExpEmail = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    const format = regExpEmail.test(email);
    if (format === true) {
      setEmailValid({ format: true, message: '' });
    } else {
      setEmailValid({ format: false, message: '이메일이 유효하지 않습니다' });
    }
  };
  const validatePassword = (password: string, passwordConfirm: string) => {
    const regExpPassword = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{6,16}$/;
    const format = regExpPassword.test(password);
    setPasswordValid({ ...passwordValid, format });

    const confirm = password === passwordConfirm;
    setPasswordValid({ ...passwordValid, confirm });

    switch (true) {
      case format === true && confirm === true:
        setPasswordValid({ format, confirm, message: '' });
        return;
      case format === true && confirm === false:
        setPasswordValid({ format, confirm, message: '비밀번호가 일치하지 않습니다.' });
        return;
      case format === false && confirm === true:
        setPasswordValid({
          format,
          confirm,
          message: '비밀번호가 유효하지 않습니다. (특수문자, 영문, 숫자 포함 6-16자)',
        });
        return;
      case format === false && confirm === false:
        setPasswordValid({
          format,
          confirm,
          message: '비밀번호가 유효하지 않습니다. (특수문자, 영문, 숫자 포함 6-16자)',
        });
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

    if (type === 'login') {
      if (emailValid && password) {
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

  useEffect(() => {
    if (notInitialEmailRender.current) {
      validateEmail(email);
    } else {
      notInitialEmailRender.current = true;
    }
  }, [email]);
  useEffect(() => {
    if (type === 'register') {
      if (notInitialPasswordRender.current) {
        validatePassword(password, passwordConfirm);
      } else {
        notInitialPasswordRender.current = true;
      }
    }
  }, [password, passwordConfirm]);
  return (
    <FullScreen>
      <LeftBox>
        <div>
          <h2>{type === 'register' ? "You're now part of COSHIKIN." : 'Welcome back to COSHIKIN :)'}</h2>
          <p>Sign in to view more information.</p>
        </div>
      </LeftBox>

      <RightBox>
        <div>
          <LogoTitle title={text} />
          <form onSubmit={onSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
            <StyledInput type="text" name="email" placeholder="Email" onChange={onChange} value={email} />
            <p className="errorMessage">{emailValid.message && email ? emailValid.message : null}</p>
            <StyledInput
              type={passwordView ? 'text' : 'password'}
              name="password"
              placeholder={type === 'register' ? 'Password' : 'Password'}
              onChange={onChange}
              value={password}
            />
            {type === 'register' && (
              <StyledInput
                type={passwordView ? 'text' : 'password'}
                name="passwordConfirm"
                placeholder="Confirm Password"
                onChange={onChange}
                value={passwordConfirm}
              />
            )}
            <p className="errorMessage">
              {type === 'register' && passwordValid.message
                ? password || passwordConfirm
                  ? passwordValid.message
                  : null
                : null}
            </p>
            {type === 'register' && (
              <span>
                <input type="checkbox" name="passwordShow" onChange={passwordToggle} />
                Show Password
              </span>
            )}
            {type === 'login' && (
              <p>
                <Link to="/비밀번호찾기~">Forgot Password?</Link>
              </p>
            )}
            <StyledButton>{text}</StyledButton>
            {type === 'login' && (
              <p style={{ color: '#9F9F9F' }}>
                Don't have any password? <Link to="/register">Sign up!</Link>
              </p>
            )}
          </form>
        </div>
      </RightBox>
    </FullScreen>
  );
}

export default AuthForm;
