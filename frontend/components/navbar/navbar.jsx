import React from 'react';
import { Link, hashHistory } from 'react-router';
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
    this.props.clearSessionErrors();
  }

  onLogOut(logout) {
    logout();
    hashHistory.push("/");
    this.setState({modalOpen: false});
  }

  loggedOut() {
    return (
    <nav className="links">
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
