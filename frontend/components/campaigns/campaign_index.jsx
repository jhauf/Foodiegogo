import React from 'react';
import CampaignIndexItem from './campaign_index_item';
import CampaignForm from './campaign_form';

class CampaignIndex extends React.Component {
  componentDidMount() {
    this.props.fetchCampaigns();
  }

  render () {
    return (
      <div>
        <ul>
          {
            this.props.campaigns.map(campaign => (
              <CampaignIndexItem
                key={campaign.id}
                deleteCampaign={this.props.deleteCampaign}
                campaign={campaign} />
            ))
          }
        </ul>
        <CampaignForm formType="new" action={this.props.createCampaign} />
      </div>
    );
  }
}

export default CampaignIndex;
