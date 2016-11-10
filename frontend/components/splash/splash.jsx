import React from 'react';
import { Link, withRouter, hashHistory } from 'react-router';

class Splash extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (this.props.location.pathname === "/") ?
    (<div className="splashpage">
    <h1> A Crowdfunding Platform for People Who Love Food</h1>
    <button className="explorebutton" onClick={this.props.handleClickLogin}> Sign In</button>
    <button className="explorebutton" onClick={this.props.handleGuest}> Guest Demo</button>
  </div>) : (<div></div>);
  }
}



export default withRouter(Splash);
