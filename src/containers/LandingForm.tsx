import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import palette from '../lib/styles/palette';
import chatImg from '../components/common/images/chat.png';

const LandingBox = styled.div`
  position: absolute;
  top: 81px;
  width: calc(100%);
  height: calc(100% - 81px);

  background: linear-gradient(to right, ${palette.purple[2]} 0%, white 50%);

  z-index: -1;
`;

const MainBox = styled.div`
  margin: 230px 0 0 0;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`;

const LeftBox = styled.div`
  margin: 0 0 0 200px;
  p {
    color: ${palette.purple[0]};
    font-weight: bold;
    font-size: 25px;
    line-height: 40%;
  }
  h1 {
    color: black;
    font-weight: bold;
    font-size: 110px;
    line-height: 40%;
  }
`;

const Button = styled.button`
  border-radius: 10px;
  background-color: ${palette.purple[0]};
  border-style: none;
  margin: 20px 0 0 0;
  width: 270px;
  height: 70px;
  cursor: pointer;
  p {
    font-weight: bold;
    color: white;
  }
`;

const RightBox = styled.div`
  img {
    margin: 0 200px 0 0;
  }
`;

function LandingForm() {
  return (
    <LandingBox>
      <MainBox>
        <LeftBox>
          <p>CODING Q&A PLATFORM</p>
          <h1>We will</h1>
          <h1>answer your</h1>
          <h1>question.</h1>
          <Link to="/register">
            <Button>
              <p>Get started</p>
            </Button>
          </Link>
        </LeftBox>
        <RightBox>
          <img src={chatImg} alt="chatting" />
        </RightBox>
      </MainBox>
    </LandingBox>
  );
}

export default LandingForm;
