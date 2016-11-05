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
  </div>);
  } else {
    return (<div></div>);
  }
};

export default withRouter(Splash);
