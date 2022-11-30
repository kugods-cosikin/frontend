/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-console */
/* eslint-disable react/button-has-type */
import React, { useEffect, useRef, useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { login, register } from '../../lib/api/auth';
import palette from '../../lib/styles/palette';

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
    width: 370px;
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

    & div {
      display: flex;
      flex-direction: row;
      align-itmes: center;
    }

    & img {
      width: 35px;
      height: 33px;
      margin: auto 0;
      margin-right: 10px;
      cursor: pointer;
    }
  }

  & h1 {
    width: 155px;
    height: 59;

    font-size: 40px;
  }

  & p {
    margin: 0 0 0 auto;
  }

  .errorMessage {
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }
`;
const StyledInput = styled.input`
  font-size: 1rem;
  border-radius: 10px;
  border: 2px solid ${palette.gray[2]};
  padding-left: 10px;
  outline: none;
  width: 377px;
  height: 49px;
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
  const navigate = useNavigate();

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
  const onClick = () => {
    navigate('/');
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
          <h2>{type === 'register' ? "You're now part of COSIKIN." : 'Welcome back to COSIKIN :)'}</h2>
          <p>Sign in to view more information.</p>
        </div>
      </LeftBox>

      <RightBox>
        <div>
          <div id="logoTitle">
            <img
              onClick={onClick}
              alt="logo"
              src="data:image/jpeg;base64,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"
            />

            <h1>{text}</h1>
          </div>
          <form onSubmit={onSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
            <StyledInput type="text" name="email" placeholder="Email" onChange={onChange} value={email} />
            <p className="errorMessage" style={{ fontSize: '12px', color: `${palette.red[0]}` }}>
              {emailValid.message ? emailValid.message : null}
            </p>
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
            <p className="errorMessage" style={{ fontSize: '12px', color: `${palette.red[0]}` }}>
              {type === 'register' && passwordValid.message ? passwordValid.message : null}
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
