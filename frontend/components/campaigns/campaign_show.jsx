import React from 'react';
import { Link, hashHistory } from 'react-router';

class CampaignShow extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
    this.renderPerks = this.renderPerks.bind(this);
    this.matchingPerks = this.matchingPerks.bind(this);
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
            </li>
          ))}
        </ul>
      );
    } else {
      return(<div></div>);
    }
  }



  render () {
    return this.props.campaign ?
    (<div>
        <h3>{this.props.campaign.name}</h3>
        <h4>{this.props.campaign.goal_amt}</h4>
        <h4>{this.props.campaign.current_amt}</h4>
        <h4>{this.props.campaign.end_date}</h4>
        <p>{this.props.campaign.description}</p>
        <img src={this.props.campaign.picture_url}/>
        <h4> {this.renderPerks()} </h4>
        <Link to="/campaigns">Back to Index</Link>
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
