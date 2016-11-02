import React from 'react';
import { Link } from 'react-router';
import NavbarContainer from './navbar_container';

const App = ({ children }) => (
  <div>
    <header className="navbar">
      <Link to="/" className="header-link">Foodiegogo</Link>
      <NavbarContainer />
    </header>
    {children}
  </div>
);

export default App;

// <video id="background-video" loop autoPlay>
//   <source src="../../assets/images/video.mp4" type="video/mp4"/>
//   Your browser does not support the video tag.
// </video>
