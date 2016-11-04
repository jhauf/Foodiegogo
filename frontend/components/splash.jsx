import React from 'react';
import { withRouter } from 'react-router';

const Splash = (props) => {
  if (props.routes.path === "/") {
    return (<div className="splashpage"></div>);
  } else {
    return (<div></div>);
  }
};

export default withRouter(Splash);
