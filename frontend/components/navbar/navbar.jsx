import React from 'react';
import { Link, hashHistory } from 'react-router';



class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.loggedIn = this.loggedIn.bind(this);
    this.loggedOut = this.loggedOut.bind(this);
    this.onLogOut = this.onLogOut.bind(this);
  }

  onLogOut(logout) {
    logout();
    hashHistory.push("/");
  }

  loggedOut() {
    return (
    <nav className="links">
      <Link to="/" onClick={this.props.handleClickLogin}>
        Sign In
      </Link>
      <Link to="/" onClick={this.props.handleClickSignup}>
        Sign Up
      </Link>
    </nav>);
  }

  loggedIn(currentUser, logout) {
    return (<div className="links" >
    <Link to="campaigns/new">Create a Campaign</Link>
      <div className="name">{currentUser.fname}</div>
      <button className="logout" onClick={this.onLogOut.bind(this, logout)}>Log Out</button>
    </div>);
  }


  render() {
    <Link to="campaigns/new">Create a Campaign</Link>;
    return this.props.currentUser ? this.loggedIn(this.props.currentUser, this.props.logout) : this.loggedOut();
  }
}


export default Navbar;










// <Link to="/campaigns" className="explore">Explore</Link>


// componentDidMount() {
//   this.props.fetchCampaigns();
// }
