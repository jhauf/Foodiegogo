import React from 'react';
import { Link, withRouter, hashHistory } from 'react-router';

const Splash = (props) => {
  const redirect = () => {
    return (e) => {
      e.preventDefault();
      hashHistory.push("/campaigns");
    };
  };

  if (props.location.pathname === "/") {
  return (<div className="splashpage">
  <button className="explorebutton" onClick={redirect()}>Explore</button>
  </div>);
  } else {
    return (<div></div>);
  }
};

export default withRouter(Splash);
