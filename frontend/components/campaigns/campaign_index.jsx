import React from 'react';
import CampaignIndexItem from './campaign_index_item';

class CampaignIndex extends React.Component {

  render () {
    return (
      <div>
        <ul className="campaignIndex">
          {
            this.props.campaigns.map(campaign => (
              <CampaignIndexItem
                key={campaign.id}
                deleteCampaign={this.props.deleteCampaign}
                campaign={campaign} />
            ))
          }
        </ul>
      </div>

    );
  }
}

export default CampaignIndex;
