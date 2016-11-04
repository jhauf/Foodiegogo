import React from 'react';
import { Link, hashHistory } from 'react-router';

const editLink = id => {
  return (e) => {
    e.preventDefault();
    const url = `/campaigns/${id}/edit`;
    hashHistory.push(url);
  };
};

const CampaignIndexItem = ({ campaign, router, deleteCampaign }) => {
  return (
  <li className="campaignitem">
    <h1>{campaign.name}</h1>
    <Link to={`/campaigns/${campaign.id}`}>
      <li className="indexpicture"><img src={campaign.picture_url}/></li>
    </Link>
  </li>);
};

export default CampaignIndexItem;

// <button onClick={editLink(campaign.id)}>Edit</button>
// <button onClick={() => deleteCampaign(campaign.id)}>Delete</button>
