/* eslint-disable global-require */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';

const LogoTitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-itmes: center;
  height: max-content;
  width: max-content;
  cursor: pointer;

  & img {
    width: 35px;
    height: 33px;
    margin: auto 0;
    margin-right: 10px;
  }
  & h1 {
    margin: auto 0;
    height: 30px;
    width: 90px;
    margin-top: 5px;

    font-size: 17px;
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

      <h1>코식iN</h1>
    </LogoTitleContainer>
  );
}

export default UpperLogo;
