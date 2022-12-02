import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SideBarContainer = styled.div`
  heigth: 100%;
  width: 194px;
`;

function NavBar() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Link to="/login"> Sign in </Link>
      <Link to="/register"> Sign up </Link>
      <Link to="/setup"> Set up </Link>
    </div>
  );
}

export default NavBar;
