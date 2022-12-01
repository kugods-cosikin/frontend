/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { logoUrl } from '../../lib/styles/logoUrl';
import palette from '../../lib/styles/palette';

const LogoTitleContainer = styled.div`
  position: absolute;
  top: 33px;
  left: 33px;

  display: flex;
  flex-direction: row;
  align-itmes: center;
  height: max-content;
  width: max-content;
  margin-bottom: 30px;
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
      <img
        alt="logo"
        src={logoUrl}
        // 로고
      />

      <h1>COSHIKIN</h1>
    </LogoTitleContainer>
  );
}

export default UpperLogo;
