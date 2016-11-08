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
  <h1 className="splashtext">A Crowdfunding Platform for people who love food</h1>
  </div>);
  } else {
    return (<div></div>);
  }
};

export default withRouter(Splash);
