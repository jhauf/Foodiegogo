import React from 'react';
import { Link } from 'react-router';
import Modal from 'react-modal';
import ModalStyle from './modal_style';
import SessionFormContainer from './session_form_container';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.loggedIn = this.loggedIn.bind(this);
    this.loggedOut = this.loggedOut.bind(this);
    this.handleClickLogin = this.handleClickLogin.bind(this);
    this.handleClickSignup = this.handleClickSignup.bind(this);
    this.onModalClose = this.onModalClose.bind(this);
    this.onLogOut = this.onLogOut.bind(this);

    this.state = {
      modalOpen: false,
      signIn: false
    };
  }

  handleClickLogin() {
    this.setState({
      modalOpen: true,
      signIn: true
    });
  }

  handleClickSignup() {
    this.setState({
      modalOpen: true,
      signIn: false
    });
  }
  onModalClose() {
    this.setState({modalOpen: false});
  }

  onLogOut(logout) {
    logout();
    this.setState({modalOpen: false});
  }

  loggedOut() {
    return (
    <nav className="links">
      <button onClick={this.handleClickLogin}>
        Log In
      </button>
      <button onClick={this.handleClickSignup}>
        Sign Up
      </button>

      <Modal
        isOpen={this.state.modalOpen}
        onRequestClose={this.onModalClose}
        style={ModalStyle}>
        <SessionFormContainer type={this.state.signIn}/>
      </Modal>
    </nav>);
  }

  loggedIn(currentUser, logout) {
    return (<div className="links" >
      <div>
      {currentUser.fname}
      </div>
      <button onClick={this.onLogOut.bind(this, logout)}>Log Out</button>
    </div>);
  }

  render() {
    return this.props.currentUser ? this.loggedIn(this.props.currentUser, this.props.logout) : this.loggedOut();
  }
}


export default Navbar;

// <button className="new-campaign-button">Start a Campaign</button>
// <button className="new-campaign-button">Start a Campaign</button>
