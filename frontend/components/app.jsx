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
    <video id="background-video" loop autoPlay>
      <source src="https://www.youtube.com/watch?v=QsyzkkI_g14" type="video/mp4"/>
      Your browser does not support the video tag.
    </video>
  </div>
);

export default App;
