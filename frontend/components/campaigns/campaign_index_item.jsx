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
    <Link to={`/campaigns/${campaign.id}`}>
      <li className="indexpicture"><img src={campaign.picture_url}/></li>
    </Link>
    <h1>{campaign.name}</h1>
    <h2>{campaign.description}</h2>
  </li>);
};

export default CampaignIndexItem;

// <button onClick={editLink(campaign.id)}>Edit</button>
// <button onClick={() => deleteCampaign(campaign.id)}>Delete</button>
