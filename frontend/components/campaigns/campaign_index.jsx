import React from 'react';
import CampaignIndexItem from './campaign_index_item';

class CampaignIndex extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return <div>
      <li className="header">What's Popular</li>
      <ul className="campaignIndex">
        {
          this.props.campaigns.map(campaign => (
            <CampaignIndexItem
              key={campaign.id}
              campaign={campaign} />
          ))}
        </ul>
      </div>;
  }
}





export default CampaignIndex;
