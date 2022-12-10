/* eslint-disable global-require */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import logo from './images/logo.png';

const LogoTitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: max-content;
  width: 700;
  margin-bottom: 30px;

  & img {
    width: 35px;
    height: 33px;
    margin: auto 0;
    margin-right: 10px;
    cursor: pointer;
  }
  & h1 {
    margin: auto 0;
    height: 59;

    font-size: 40px;
  }
`;

interface Props {
  title: string;
}

function LogoTitle({ title }: Props) {
  const navigate = useNavigate();
  const onClick = () => {
    navigate('/');
  };
  return (
    <LogoTitleContainer>
      <img onClick={onClick} alt="logo" src={logo} />
      <h1>{title}</h1>
    </LogoTitleContainer>
  );
}

export default LogoTitle;
