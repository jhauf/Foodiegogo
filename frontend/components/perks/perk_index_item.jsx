import React from 'react';
import { Link, hashHistory } from 'react-router';
import Modal from 'react-modal';
import ModalStyle from './../session/modal_style';
import ContributionFormContainer from './../contributions/contribution_form_container.js';



class PerkIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.onModalClose = this.onModalClose.bind(this);
    this.openModal = this.openModal.bind(this);
    this.state = {
      modalOpen: false
    };
  }

  onModalClose() {
    this.setState({modalOpen: false});
  }

  openModal() {
    this.setState({modalOpen: true});
  }

  render() {
    return(
      <div>
        {this.props.currentUser.id === this.props.campaign.campaigner_id ?
          <li className="edit"><Link to={"/campaigns/" + this.props.perk.campaign_id + "/perk/" + this.props.perk.id + "/edit"}>Edit</Link>
        </li> :
        <div></div>}
      <li className="perk" onClick={this.openModal}>
        <li className="first"> Pledge ${this.props.perk.donation_amt} </li>
        <li className="second"> {this.props.perk.name}</li>
        <li> {this.props.perk.description}</li>
        <div className="hoverPerk"><div className="hoverText">Select this Perk</div></div>
        <Modal
          isOpen={this.state.modalOpen}
          onRequestClose={this.onModalClose.bind(this)}
          style={ModalStyle}>
          <ContributionFormContainer perkKey={this.props.perkKey} campaign={this.props.campaign}/>
        </Modal>
      </li>
      </div>);
  }
}




export default PerkIndexItem;
