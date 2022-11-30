import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './view/LandingPage/LandingPage';
import LoginPage from './view/LoginPage/LoginPage';

import RegisterPage from './view/RegisterPage/RegisterPage';
import SetupPage from './view/SetupPage/SetupPage';

function App() {
  return (
    <Routes>
      <Route element={<LandingPage />} path="/" />
      <Route element={<LoginPage />} path="/login" />
      <Route element={<RegisterPage />} path="/register" />
      <Route element={<SetupPage />} path="/setup" />
    </Routes>
  );
}

export default App;
