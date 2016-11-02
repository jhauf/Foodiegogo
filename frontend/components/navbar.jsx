import React from 'react';
import { Link } from 'react-router';

const loggedOut = () => (
  <nav className="navbar">
    <button className="new-campaign-button">Start a Campaign</button>
    <Link to="/login" activeClassName="current">Log In</Link>
    &nbsp;&nbsp;
    <Link to="/signup" activeClassName="current">Sign Up</Link>
  </nav>
);

const loggedIn = (currentUser, logout) => (
    <div className="navbar" >
    <button className="new-campaign-button">Start a Campaign</button>
    <br/>
    {currentUser.fname}
    <br/>
    <button className="header-button" onClick={logout}>Log Out</button>
    </div>
);


const Navbar = ({ currentUser, logout }) => (
  currentUser ? loggedIn(currentUser, logout) : loggedOut()
);

export default Navbar;
