import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div>
      <Link to="/">Logo </Link>
      <Link to="/login">Sign in </Link>
      <Link to="/register">Sign up </Link>
    </div>
  );
}

export default NavBar;
