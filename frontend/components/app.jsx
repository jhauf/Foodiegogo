import React from 'react';
import { Link } from 'react-router';
import NavbarContainer from './navbar_container';

const App = ({ children }) => (
  <div>
    <header className="navbar">
      <Link to="/" className="header-link">foodiegogo</Link>
      <Link to="campaigns/new">Create a Campaign</Link>
      <NavbarContainer />
    </header>
    {children}
  </div>
);

export default App;
