import React from 'react';
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

const FullDiv = styled.div`
  height: 100vh;
  width: 100vh;
  margin-right: 0px;
  padding: 0px;
`;

function App() {
  return (
    <FullDiv>
      <TopBar />
      <Sidebar />
      <Routes>
        <Route element={<LandingPage />} path="/" />
        <Route element={<LoginPage />} path="/login" />
        <Route element={<RegisterPage />} path="/register" />
        <Route element={<SetupPage />} path="/setup" />

        <Route element={<AboutUsPage />} path="/aboutus" />
        <Route element={<FindPasswordPage />} path="/findpassword" />
        <Route element={<WhatHostPage />} path="/whathost" />
      </Routes>
    </FullDiv>
  );
}

export default App;
