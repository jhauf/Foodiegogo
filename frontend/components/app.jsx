import React from 'react';
import { Link } from 'react-router';
import NavbarContainer from './navbar/navbar_container';
import Splash from './splash/splash';



const App = ({ children }) => (
  <div>
    <header className="navbar">
      <Link to="/" className="header-link">foodiegogo</Link>
      <NavbarContainer />
    </header>
    <Splash/>
    {children}
  </div>
);

export default App;
