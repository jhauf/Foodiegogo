import React from 'react';
import { Link, hashHistory } from 'react-router';

class CampaignShow extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  // this.props.fetchCampaigns();
  }
  componentDidMount() {
    if (this.props.params.campaignId) {
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
    const campaign = this.props.campaign;
    return (
      <div>
        <h3>{campaign.name}</h3>
        <h4>{campaign.goal_amt}</h4>
        <h4>{campaign.current_amt}</h4>
        <h4>{campaign.end_date}</h4>
        <p>{campaign.description}</p>
        <img src={campaign.picture_url}/>
        <Link to="/campaigns">Back to Index</Link>
        {this.props.currentUser.id === campaign.campaigner_id ?
        <div><button onClick={this.handleDelete.bind(this, campaign.id)}>Delete</button>
        <Link to={"/campaigns/" + campaign.id + "/edit"}>Edit</Link> </div>:
        <div></div>}
      </div>
    );
  }
}
// <Link to=`/campaigns/{campaign.id}/edit`>Edit</Link>

export default CampaignShow;
