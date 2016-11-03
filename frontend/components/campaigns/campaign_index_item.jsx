import React from 'react';
import { Link, hashHistory } from 'react-router';

const editLink = id => {
  return (e) => {
    e.preventDefault();
    const url = `/campaigns/${id}/edit`;
    hashHistory.push(url);
  };
};

const CampaignIndexItem = ({ campaign, router, deleteCampaign }) => (
  <li>
    <Link to={`/campaigns/${campaign.id}`}>
      {campaign.title}
    </Link>
    <button onClick={editLink(campaign.id)}>Edit</button>;
    <button onClick={() => deleteCampaign(campaign.id)}>Delete</button>
  </li>
);

export default CampaignIndexItem;
