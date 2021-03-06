import React from 'react';
import { Link, hashHistory } from 'react-router';
import PerkIndexItem from '../perks/perk_index_item';
import Modal from 'react-modal';
import ContributionIndex from '../contributions/contribution_index';
import ModalStyle from './../session/modal_style';


class CampaignShow extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
    this.days = this.days.bind(this);
    this.amtWithCommas = this.amtWithCommas.bind(this);
    this.openEdit = this.openEdit.bind(this);
    this.openPerk = this.openPerk.bind(this);
    this.openModal = this.openModal.bind(this);
    this.onModalClose = this.onModalClose.bind(this);
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

  componentDidMount() {
    this.props.fetchCampaigns(this.props.params.campaignId);
    this.props.fetchPerks(this.props.params.campaignId);
    this.props.fetchContributions(this.props.params.campaignId);
    window.scrollTo(0, 0);
  }

  handleDelete(id) {
    this.props.deleteCampaign(parseInt(id));
    hashHistory.push("campaigns/");
  }

  renderPerks() {
    if (this.props.perks) {
      return(
        <ul>
          {this.props.perks.map((perk, i) => (
            <PerkIndexItem
              key={`perk-${i}`}
              perkKey={perk.id}
              currentUser={this.props.currentUser}
              campaign={this.props.campaign}
              perk={perk} />
          ))}
        </ul>
      );
    } else {
      return(<div></div>);
    }
  }


    amtWithCommas (amount) {
      return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    days() {
      let today = new Date();
      let date_to_reply = new Date(this.props.campaign.end_date);
      let timeinmilisec = date_to_reply.getTime() - today.getTime() ;
      return ( Math.floor(timeinmilisec / (1000 * 60 * 60 * 24)) + 13);
  }


  pictureOrVideo () {
    if (this.props.campaign.video_url === "") {
      if (this.props.campaign.picture_url === "") {
        return (<img src="http://res.cloudinary.com/dps0ohgkp/image/upload/c_scale,h_380,w_620/v1478560997/placeholder3_q1ax2h.png"/>);
      } else {
        return (<img src={this.props.campaign.picture_url}/>);
      }
    } else {
      return (<video controls autoPlay className="video" src={this.props.campaign.video_url}>
        Your user agent does not support the HTML5 Video element.
      </video>);
    }
  }

  openEdit() {
    hashHistory.push("/campaigns/" + this.props.campaign.id + "/edit");
  }

  openPerk() {
    hashHistory.push("/campaigns/" + this.props.campaign.id + "/perk/new");
  }

  render () {
    return this.props.campaign ?
    (<div className="showcontainer">
        <h3 className="showheader">{this.props.campaign.name}</h3>
        {this.props.currentUser.id === this.props.campaign.campaigner_id ?
          <div className="authorLinks">
          <button onClick={this.openEdit}>Update Campaign</button>
          <button onClick={this.openPerk}>Add a Perk</button>
          <button onClick={this.openModal}>Delete Campaign</button>
            <Modal
              isOpen={this.state.modalOpen}
              onRequestClose={this.onModalClose.bind(this)}
              className="perkmodal">
                <h2>Are you sure you want to delete this campaign?</h2>
                <input className="formbutton" type="submit" value="Yes" onClick={this.handleDelete.bind(this, this.props.campaign.id)}/>
          </Modal>
          </div>:
            <div></div>}
        <div className="show">
          <div className="vid">
          <div>{this.pictureOrVideo()}</div>
            <p className="description">{this.props.campaign.description}</p>
            <ContributionIndex contributions={this.props.contributions}/>
            {this.props.campaign.video_url ?
            <img src={this.props.campaign.picture_url} className="showpic"/> : <div></div>}
            </div>
          <div className="stats">
          <h4 className="big">${this.amtWithCommas(this.props.campaign.current_amt)}</h4>
          <h5 className="small1">pledged of ${this.amtWithCommas(this.props.campaign.goal_amt)} goal</h5>
            <h4 className="big">{this.days(this.props.campaign.end_date)}</h4>
            <h5 className="small2">days to go</h5>
            <h4> {this.renderPerks()} </h4>
        </div>
        </div>
      </div>
    ) : (<div></div>);
  }
}

export default CampaignShow;




// componentWillReceiveProps(nextProps) {
//   this.props.fetchCampaign(parseInt(nextProps.params.campaignId));
// }
