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

  usernameDropdown () {
   $(".dropdown").removeClass("hidden");
   $(".dropdown").mouseleave(() => $(".dropdown").addClass("hidden"));
 }

  loggedIn(currentUser, logout) {
    return (
    <div className="links" >
    <Link to="campaigns/new">Create a Campaign</Link>
      <span className="name" onClick={this.usernameDropdown}>
              {currentUser.fname}
              <ul className="dropdown hidden">
                <div className="test">
                  <ul>My Campaigns
                    {
                      currentUser.campaigns.map(campaign => (
                        <li key={campaign.id}>{campaign.name}</li>
                      ))}
                      </ul>
                  <ul>My Perks
                    {
                      currentUser.perks.map(perk => (
                        <li key={perk.id}>{perk.name}</li>
                      ))}
              </ul>
            </div>
              </ul>
            </span>


      <button className="logout" onClick={this.onLogOut.bind(this, logout)}>Log Out</button>
      </div>
    );
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
