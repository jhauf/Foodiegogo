import React from 'react';
import { Link } from 'react-router';

class CampaignShow extends React.Component {


  componentDidMount() {
    if (this.props.params.campaignId) {
      this.props.fetchCampaigns();
      this.props.fetchCampaign(parseInt(this.props.params.campaignId));
    }
  }

  componentWillReceiveProps(nextProps) {
    this.props.fetchCampaign(parseInt(nextProps.params.campaignId));
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
        <Link to={"/campaigns/" + campaign.id + "/edit"}>Edit</Link>
        <Link to="/campaigns">Back to Index</Link>
      </div>
    );
  }
}
// <Link to=`/campaigns/{campaign.id}/edit`>Edit</Link>

export default CampaignShow;
