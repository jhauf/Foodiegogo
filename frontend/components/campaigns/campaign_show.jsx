import React from 'react';
import { Link, hashHistory } from 'react-router';
import PerkIndexItem from '../perks/perk_index_item';

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
            <PerkIndexItem
              key={`perk-${i}`}
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
    let oneDay = 24*60*60*1000;
    let firstDate = new Date(Date.now());
    let secondDate = new Date(this.props.campaign.end_date);
    return Math.round(Math.abs((firstDate.getTime() - secondDate.getTime())/oneDay));
  }

  pictureOrVideo () {
    if (this.props.campaign.video_url === "") {
      if (this.props.campaign.picture_url === "") {
        return (<img src="http://res.cloudinary.com/dps0ohgkp/image/upload/c_scale,h_380,w_620/v1478560997/placeholder3_q1ax2h.png"/>);
      } else {
        return (<img src={this.props.campaign.picture_url}/>);
      }
    } else {
      return (<video controls className="video" src={this.props.campaign.video_url}>
        Your user agent does not support the HTML5 Video element.
      </video>);
    }
  }

  render () {
    return this.props.campaign ?
    (<div>
        <h3 className="showheader">{this.props.campaign.name}</h3>
        {this.props.currentUser.id === this.props.campaign.campaigner_id ?
          <div className="authorLinks">
          <Link to={"/campaigns/" + this.props.campaign.id + "/edit"}>Edit Campaign</Link>
          <Link to={"/campaigns/" + this.props.campaign.id + "/perk/new"}>Add A Perk</Link>
          <button onClick={this.handleDelete.bind(this, this.props.campaign.id)}>Delete Campaign</button>
          </div>:
            <div></div>}
        <div className="show">
          <div className="vid">
          <div>{this.pictureOrVideo()}</div>
            <p className="description">{this.props.campaign.description}</p>
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
// <Link to=`/campaigns/{campaign.id}/edit`>Edit</Link>

export default CampaignShow;
