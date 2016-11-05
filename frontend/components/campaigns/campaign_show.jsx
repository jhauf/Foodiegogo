import React from 'react';
import { Link, hashHistory } from 'react-router';

class CampaignShow extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentWillMount() {
    if (this.props.params.campaignId) {
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

  render () {
    return this.props.campaign ?
    (<div>
        <h3>{this.props.campaign.name}</h3>
        <h4>{this.props.campaign.goal_amt}</h4>
        <h4>{this.props.campaign.current_amt}</h4>
        <h4>{this.props.campaign.end_date}</h4>
        <p>{this.props.campaign.description}</p>
        <img src={this.props.campaign.picture_url}/>
        <Link to="/campaigns">Back to Index</Link>
        {this.props.currentUser.id === this.props.campaign.campaigner_id ?
        <div><button onClick={this.handleDelete.bind(this, this.props.campaign.id)}>Delete</button>
        <Link to={"/campaigns/" + this.props.campaign.id + "/edit"}>Edit</Link>
        <Link to={"/campaigns/add_perks"}>Add Perks</Link></div>:
        <div></div>}
      </div>
    ) : (<div></div>);
  }
}
// <Link to=`/campaigns/{campaign.id}/edit`>Edit</Link>

export default CampaignShow;
