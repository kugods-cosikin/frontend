import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './view/LandingPage/LandingPage';
import LoginPage from './view/LoginPage/LoginPage';
import NavBar from './view/NavBar/NavBar';
import RegisterPage from './view/RegisterPage/RegisterPage';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route element={<LandingPage />} path="/" />
        <Route element={<LoginPage />} path="/login" />
        <Route element={<RegisterPage />} path="/register" />
      </Routes>
    </>
  );
}

export default App;
