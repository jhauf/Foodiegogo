import React from 'react';
import { Link, hashHistory } from 'react-router';

class CampaignShow extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
    this.renderPerks = this.renderPerks.bind(this);
    this.matchingPerks = this.matchingPerks.bind(this);
    this.days = this.days.bind(this);
    this.amtWithCommas = this.amtWithCommas.bind(this);

  }

  componentWillMount() {
    if (this.props.params.campaignId) {
      this.props.fetchPerks();
      this.props.fetchCampaigns();
      this.props.fetchCampaign(parseInt(this.props.params.campaignId));
    }
  }

  componentWillReceiveProps(nextProps) {
    this.props.fetchCampaign(parseInt(nextProps.params.campaignId));
  }

  handleDelete(id) {
    this.props.deleteCampaign(parseInt(id));
    hashHistory.push("campaigns/");
  }

  matchingPerks() {
    let result = [];
    Object.keys(this.props.perks).map((perkKey) => {
      if (this.props.perks[perkKey].campaign_id === parseInt(this.props.params.campaignId)) {
        result.push(this.props.perks[perkKey]);
      }
    });
    return result;
  }


  renderPerks() {
    const perks = this.matchingPerks();
    if (perks) {
      return(
        <ul>
          {perks.map((perk, i) => (
            <li key={`perk-${i}`}>
              {perk.name}
              {perk.donation_amt}
              <li className="indexpicture"><img src={perk.picture_url}/></li>
              <Link to={"/campaigns/" + perk.campaign_id + "/perk/" + perk.id + "/edit"}>Edit Perk</Link>
            </li>
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
    //
    // currentAmtWithCommas () {
    //   return this.props.campaign.current_amt.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    // }


    days() {
    let oneDay = 24*60*60*1000;
    let firstDate = new Date(Date.now());
    let secondDate = new Date(this.props.campaign.end_date);
    return Math.round(Math.abs((firstDate.getTime() - secondDate.getTime())/oneDay));
  }

  pictureOrVideo () {
    return (this.props.campaign.video_url === "" ? <img src={this.props.campaign.picture_url}/> :
    <video controls className="video" src={this.props.campaign.video_url}>
      Your user agent does not support the HTML5 Video element.
    </video>);
  }

  render () {
    return this.props.campaign ?
    (<div>
        <h3 className="showheader">{this.props.campaign.name}</h3>
        <div className="show">
          <div className="vid">
          <div>{this.pictureOrVideo()}</div>
            <p className="description">{this.props.campaign.description}</p>
            </div>
          <div className="stats">
          <h4 className="big">${this.amtWithCommas(this.props.campaign.current_amt)}</h4>
          <h5 className="small">pledged of ${this.amtWithCommas(this.props.campaign.goal_amt)} goal</h5>
            <h4 className="big">{this.days(this.props.campaign.end_date)}</h4>
            <h5 className="small">days to go</h5>
        </div>
        </div>
        <h4> {this.renderPerks()} </h4>
        {this.props.currentUser.id === this.props.campaign.campaigner_id ?
        <div><button onClick={this.handleDelete.bind(this, this.props.campaign.id)}>Delete</button>
        <Link to={"/campaigns/" + this.props.campaign.id + "/edit"}>Edit</Link>
        <Link to={"/campaigns/" + this.props.campaign.id + "/perk/new"}>Add A Perk</Link></div>:
        <div></div>}
      </div>
    ) : (<div></div>);
  }
}
// <Link to=`/campaigns/{campaign.id}/edit`>Edit</Link>

export default CampaignShow;
