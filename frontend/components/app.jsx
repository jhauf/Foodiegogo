import React from 'react';
import { Link } from 'react-router';
import GreetingContainer from './greeting_container';

const App = ({ children }) => (
  <div>
    <header className="navbar">
      <Link to="/" className="header-link">Foodiegogo</Link>
      <GreetingContainer />
    </header>
    {children}
    <div className="splash"></div>
  </div>
);

export default App;

// <video id="background-video" loop autoPlay>
//   <source src="../../assets/images/video.mp4" type="video/mp4"/>
//   Your browser does not support the video tag.
// </video>
