import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../Button';
import UpperLogo from '../UpperLogo';
import palette from '../../../lib/styles/palette';

const TopBarContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  height: 81px;
  width: 100%;
  align-items: center;
  background-color: ${palette.gray[5]};
  border-bottom: 3px solid ${palette.gray[4]};

  min-width: 1000px;
`;
const LeftBox = styled.div`
  margin-left: 30px;
`;
const RightBox = styled.div`
  margin-right: 75px;
  & button {
    margin-left: 10px;
  }
`;

function RegularTopBar() {
  return (
    <TopBarContainer>
      <LeftBox>
        <UpperLogo />
      </LeftBox>
      <RightBox>
        <Link to="/login">
          <Button
            id="signin"
            width="120px"
            height="40px"
            backgroundColor={palette.gray[5]}
            style={{ color: palette.purple[1] }}
          >
            Sign in
          </Button>
        </Link>

        <Link to="/register">
          <Button id="signup" width="120px" height="40px" backgroundColor={palette.purple[2]}>
            Sign up
          </Button>
        </Link>

        <Link to="/aboutus">
          <Button
            id="aboutus"
            width="120px"
            height="40px"
            backgroundColor={palette.gray[5]}
            style={{ color: palette.purple[1] }}
          >
            About us
          </Button>
        </Link>

        <Link to="/setup">
          <Button
            id="behost"
            width="120px"
            height="40px"
            backgroundColor={palette.purple[2]}
            style={{ color: palette.gray[0] }}
          >
            Be a Host
          </Button>
        </Link>
      </RightBox>
    </TopBarContainer>
  );
}

export default RegularTopBar;
