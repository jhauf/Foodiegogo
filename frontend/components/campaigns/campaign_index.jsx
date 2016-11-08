import React from 'react';
import CampaignIndexItem from './campaign_index_item';


class CampaignIndex extends React.Component {

  componentDidMount() {
    this.props.fetchCampaigns();
  }

  render () {
    return this.props.currentUser ?
    (
      <div>
        <li className="header">What's Popular</li>
        <ul className="campaignIndex">
          {
            this.props.campaigns.map(campaign => (
              <CampaignIndexItem
                key={campaign.id}
                deleteCampaign={this.props.deleteCampaign}
                campaign={campaign} />
            ))}
        </ul>
      </div>) :
      <div></div>;
      }
  }


export default CampaignIndex;
