import React from 'react';
import { Link } from 'react-router-dom';

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
