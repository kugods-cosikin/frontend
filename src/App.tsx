import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import LandingPage from './view/LandingPage/LandingPage';
import LoginPage from './view/LoginPage/LoginPage';
import RegisterPage from './view/RegisterPage/RegisterPage';
import SetupPage from './view/SetupPage/SetupPage';

import TopBar from './view/TopBar/TopBar';

import WhatHostPage from './view/ExceptPage/WhatHostPage';
import FindPasswordPage from './view/ExceptPage/FindPasswordPage';
import AboutUsPage from './view/ExceptPage/AboutUsPage';
import Sidebar from './view/SideBar/SideBar';
import MyProfilePage from './view/MyProfilePage/MyProfilePage';
import ProfileListPage from './view/ProfileListPage/ProfileListPage';

import './App.css';

const FullDiv = styled.div`
  z-index: -3;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  min-height: 100%;
  min-width: 100%;
`;

function App() {
  return (
    <FullDiv>
      <TopBar />
      <Sidebar />
      <Suspense fallback={<div>loading...</div>}>
        <Routes>
          <Route element={<LandingPage />} path="/" />
          <Route element={<LoginPage />} path="/login" />
          <Route element={<RegisterPage />} path="/register" />
          <Route element={<SetupPage />} path="/setup" />

          <Route element={<ProfileListPage />} path="/profilelist" />
          <Route element={<MyProfilePage />} path="/myprofile" />

          <Route element={<AboutUsPage />} path="/aboutus" />
          <Route element={<FindPasswordPage />} path="/findpassword" />
          <Route element={<WhatHostPage />} path="/whathost" />
        </Routes>
      </Suspense>
    </FullDiv>
  );
}

export default App;
