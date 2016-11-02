import React from 'react';
import { Link } from 'react-router';
import Modal from 'react-modal';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.loggedIn = this.loggedIn.bind(this);
    this.loggedOut = this.loggedOut.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      modalOpen: false
    };
  }

  handleClick() {
    this.setState({ modalOpen: true});
  }

  loggedOut() {
    return (
    <nav className="links">
      <div onClick={this.handleClick}>
        Log In
      </div>
      &nbsp;&nbsp;
      <div onClick={this.handleClick}>
        Sign Up
      </div>

      <Modal
        isOpen={this.state.modalOpen}>
        onRequestClose={}
        ...content
      </Modal>
    </nav>);
  }

  loggedIn(currentUser, logout) {
    return (<div className="links" >
      <br/>
      {currentUser.fname}
      <br/>
      <button onClick={logout}>Log Out</button>
    </div>);
  }

  render() {
    return this.props.currentUser ? this.loggedIn(this.props.currentUser, this.props.logout) : this.loggedOut();
  }
}


export default Navbar;

// <button className="new-campaign-button">Start a Campaign</button>
// <button className="new-campaign-button">Start a Campaign</button>
