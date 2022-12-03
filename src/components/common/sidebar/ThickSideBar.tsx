import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { sideIcon } from '../SideIcon';
import palette from '../../../lib/styles/palette';

const FullScreen = styled.div`
  position: relative;
  top: 81px;
  height: calc(100% - 81px);
  width: 100%;
  display: flex;
  flex-direciton: row;
`;
const SideBarContainer = styled.div`
  width: 194px;

  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background-color: ${palette.purple[3]};
  border-bottom: 3px solid ${palette.gray[4]};
`;
const UpperContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 100px;
`;
const LowerContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 60px;
`;
const SideMenuContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding-left: 25px;
  cursor: pointer;

  & img {
    width: 18px;
    height: 18px;
    margin: auto 0;
    margin-right: 10px;
  }
  & h1 {
    font-size: 20px;
    line-height: 100%;
    color: ${palette.gray[2]};
  }

  &.clicked {
    background-color: ${palette.purple[2]};
    border-left: 5px solid ${palette.purple[0]};
    color: ${palette.gray[0]};
    border-radius: 0px 20px 0px 0px;
    & h1 {
      color: ${palette.gray[0]};
    }
  }
`;

const sideMenu = ['탐색', '프로필', '채팅', '세팅', '로그아웃'];
const initialState = {
  state: [
    { id: 0, state: false },
    { id: 1, state: false },
    { id: 2, state: false },
    { id: 3, state: false },
  ],
};

function ThickSideBar() {
  // 페이지 새로고침될 때 사이드바 toggle
  const address = useLocation().pathname;
  useEffect(() => {
    switch (true) {
      case address.endsWith('/profilelist'):
        setClickedState({
          ...clickedState,
          state: clickedState.state.map((item) =>
            item.id === 0 ? { ...item, state: true } : { ...item, state: false }
          ),
        });
        return;
      case address.endsWith('/myprofile'):
        setClickedState({
          ...clickedState,
          state: clickedState.state.map((item) =>
            item.id === 1 ? { ...item, state: true } : { ...item, state: false }
          ),
        });
        return;
      case address.endsWith('/chat'):
        setClickedState({
          ...clickedState,
          state: clickedState.state.map((item) =>
            item.id === 2 ? { ...item, state: true } : { ...item, state: false }
          ),
        });
        return;
      case address.endsWith('/setting'):
        setClickedState({
          ...clickedState,
          state: clickedState.state.map((item) =>
            item.id === 3 ? { ...item, state: true } : { ...item, state: false }
          ),
        });
        break;
      default:
        break;
    }
  }, []);

  const [clickedState, setClickedState] = useState(initialState);

  const onToggleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const index = Number(e.currentTarget.id);
    setClickedState({
      ...clickedState,
      state: clickedState.state.map((item) =>
        item.id === index ? { ...item, state: true } : { ...item, state: false }
      ),
    });
  };
  const onLogoutClick = (e: React.MouseEvent<HTMLDivElement>) => {
    alert('로그아웃 되었습니다!');
  };
  return (
    <FullScreen>
      <SideBarContainer>
        <UpperContainer>
          <Link to="/profilelist" style={{ textDecoration: 'none' }}>
            <SideMenuContainer
              className={clickedState.state[0].state === true ? 'clicked' : undefined}
              id="0"
              onClick={onToggleClick}
            >
              <img alt={sideMenu[0]} src={sideIcon[0]} />
              <h1>{sideMenu[0]}</h1>
            </SideMenuContainer>
          </Link>

          <Link to="/myprofile" style={{ textDecoration: 'none' }}>
            <SideMenuContainer
              className={clickedState.state[1].state === true ? 'clicked' : undefined}
              id="1"
              onClick={onToggleClick}
            >
              <img alt={sideMenu[1]} src={sideIcon[1]} />
              <h1>{sideMenu[1]}</h1>
            </SideMenuContainer>
          </Link>

          <Link to="/chat" style={{ textDecoration: 'none' }}>
            <SideMenuContainer
              className={clickedState.state[2].state === true ? 'clicked' : undefined}
              id="2"
              onClick={onToggleClick}
            >
              <img alt={sideMenu[2]} src={sideIcon[2]} />
              <h1>{sideMenu[2]}</h1>
            </SideMenuContainer>
          </Link>
        </UpperContainer>

        <LowerContainer>
          <Link to="/setting" style={{ textDecoration: 'none' }}>
            <SideMenuContainer
              className={clickedState.state[3].state === true ? 'clicked' : undefined}
              id="3"
              onClick={onToggleClick}
            >
              <img alt={sideMenu[3]} src={sideIcon[3]} />
              <h1>{sideMenu[3]}</h1>
            </SideMenuContainer>
          </Link>

          <SideMenuContainer onClick={onLogoutClick}>
            <img alt={sideMenu[4]} src={sideIcon[4]} />
            <h1>{sideMenu[4]}</h1>
          </SideMenuContainer>
        </LowerContainer>
      </SideBarContainer>
    </FullScreen>
  );
}

export default ThickSideBar;
