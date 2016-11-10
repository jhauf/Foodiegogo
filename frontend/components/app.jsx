import React from 'react';
import { Link, hashHistory } from 'react-router';
import NavbarContainer from './navbar/navbar_container';
import Splash from './splash/splash';
import Modal from 'react-modal';
import ModalStyle from './session/modal_style';
import SessionFormContainer from './session/session_form_container';
import CampaignForm from './campaigns/campaign_form';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleClickLogin = this.handleClickLogin.bind(this);
    this.handleClickSignup = this.handleClickSignup.bind(this);
    this.onModalClose = this.onModalClose.bind(this);
    this.handleGuest = this.handleGuest.bind(this);

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
    this.props.clearSessionErrors();
    this.setState({modalOpen: false});
  }

  handleGuest(e) {
    e.preventDefault();
    this.props.guestLogin();
    this.onModalClose();
  }


  render() {
    return <div>
      <header className="navbar">
        <Link to="/campaigns/" className="header-link">foodiegogo</Link>
        <NavbarContainer handleClickSignup={this.handleClickSignup} handleClickLogin={this.handleClickLogin}/>
      </header>
      <Splash handleGuest={this.handleGuest} handleClickLogin={this.handleClickLogin}/>

        <Modal
          isOpen={this.state.modalOpen}
          onRequestClose={this.onModalClose.bind(this)}
          style={ModalStyle}>
          <SessionFormContainer type={this.state.signIn} onModalClose={this.onModalClose}/>
        </Modal>
      {this.props.children}
    </div>;
  }
}


export default App;
