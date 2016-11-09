import React from 'react';
import { Link, withRouter, hashHistory } from 'react-router';

const Splash = (props) => {
  return (props.location.pathname === "/") ?
  (<div className="splashpage"> <h1 className="splashtext">A Crowdfunding Platform for people who love food</h1> </div>) : (<div></div>);
};

export default withRouter(Splash);
