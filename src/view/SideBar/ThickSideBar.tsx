import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { sideIcon } from '../../components/common/SideIcon';
import palette from '../../lib/styles/palette';

const FullScreen = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  display: flex;
`;
const SideBarContainer = styled.div`
  margin-top: 81px;
  heigth: 100%;
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
  margin-top: 100px;
`;
const LowerContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 60px;
`;
const SideMenuContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 25px;

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
`;

const sideMenu = ['탐색', '프로필', '채팅', '세팅', '로그아웃'];

function ThickSideBar() {
  const [clickedMenu, setClickedMenu] = useState({});

  const onToggle = (e: React.MouseEvent<HTMLDivElement>) => {
    const index = Number(e.currentTarget.id);
  };

  useEffect(() => {
    console.log(clickedMenu);
  }, [clickedMenu]);
  return (
    <FullScreen>
      <SideBarContainer>
        <UpperContainer>
          <SideMenuContainer id="0" onClick={onToggle}>
            <img alt={sideMenu[0]} src={sideIcon[0]} />
            <h1>{sideMenu[0]}</h1>
          </SideMenuContainer>

          <SideMenuContainer id="1" onClick={onToggle}>
            <img alt={sideMenu[1]} src={sideIcon[1]} />
            <h1>{sideMenu[1]}</h1>
          </SideMenuContainer>

          <SideMenuContainer id="2" onClick={onToggle}>
            <img alt={sideMenu[2]} src={sideIcon[2]} />
            <h1>{sideMenu[2]}</h1>
          </SideMenuContainer>
        </UpperContainer>

        <LowerContainer>
          <SideMenuContainer id="3" onClick={onToggle}>
            <img alt={sideMenu[3]} src={sideIcon[3]} />
            <h1>{sideMenu[3]}</h1>
          </SideMenuContainer>

          <SideMenuContainer>
            <img alt={sideMenu[4]} src={sideIcon[4]} />
            <h1>{sideMenu[4]}</h1>
          </SideMenuContainer>
        </LowerContainer>
      </SideBarContainer>
    </FullScreen>
  );
}

export default ThickSideBar;
