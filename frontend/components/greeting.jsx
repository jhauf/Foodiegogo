import React from 'react';
import { Link } from 'react-router';

const sessionLinks = () => (
  <nav className="login-signup">
    <Link to="/login" activeClassName="current">Log In</Link>
    &nbsp;&nbsp;
    <Link to="/signup" activeClassName="current">Sign Up</Link>
  </nav>
);

const personalGreeting = (currentUser, logout) => (
    <div className="login-signup" >
    Hi, {currentUser.fname}!
    <button className="header-button" onClick={logout}>Log Out</button>
    </div>
);

const Greeting = ({ currentUser, logout }) => (
  currentUser ? personalGreeting(currentUser, logout) : sessionLinks()
);

export default Greeting;
