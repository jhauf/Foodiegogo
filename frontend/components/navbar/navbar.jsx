import React from 'react';
import { Link } from 'react-router';
import Modal from 'react-modal';
import ModalStyle from './../session/modal_style';
import SessionFormContainer from './../session/session_form_container';
import CampaignForm from './../campaigns/campaign_form';


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

  componentDidMount() {
    this.props.fetchCampaigns();
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
    this.props.clearErrors();
  }

  onLogOut(logout) {
    logout();
    this.setState({modalOpen: false});
  }

  loggedOut() {
    return (
    <nav className="links">
      <Link to="campaigns/new">Create a Campaign</Link>
      <Link to="/" onClick={this.handleClickLogin}>
        Log In
      </Link>
      <Link to="/" onClick={this.handleClickSignup}>
        Sign Up
      </Link>

      <Modal
        isOpen={this.state.modalOpen}
        onRequestClose={this.onModalClose.bind(this)}
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
    <Link to="campaigns/new">Create a Campaign</Link>;
    return this.props.currentUser ? this.loggedIn(this.props.currentUser, this.props.logout) : this.loggedOut();
  }
}


export default Navbar;

// <button className="new-campaign-button">Start a Campaign</button>
// <button className="new-campaign-button">Start a Campaign</button>