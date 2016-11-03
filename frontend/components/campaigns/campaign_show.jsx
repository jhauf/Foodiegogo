import React from 'react';
import { Link } from 'react-router';

class CampaignShow extends React.Component {
  componentDidMount() {
    this.props.fetchCampaign(this.props.params.campaignId);
  }

  componentWillReceiveProps(nextProps) {
    this.props.fetchCampaign(nextProps.params.campaignId);
  }

  render () {
    const campaign = this.props.campaign;
    return (
      <div>
        <h3>{campaign.title}</h3>
        <p>{campaign.description}</p>
        <Link to="/">Back to Index</Link>
      </div>
    );
  }
}

export default CampaignShow;
