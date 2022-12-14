/* eslint-disable global-require */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';

const LogoTitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  cursor: pointer;

  & img {
    width: 35px;
    height: 33px;
    margin: auto 0;
    margin-right: 10px;
  }
  & h1 {
    margin: auto 0;
    width: 150px;

    font-size: 30px;
    color: ${palette.purple[1]};
  }
`;

function UpperLogo() {
  const navigate = useNavigate();
  const onClick = () => {
    navigate('/');
  };
  return (
    <LogoTitleContainer onClick={onClick}>
      <img alt="logo" src={require('./images/logo.png')} />

      <h1>코식IN</h1>
    </LogoTitleContainer>
  );
}

export default UpperLogo;
