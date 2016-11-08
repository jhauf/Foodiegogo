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
      <li className="indexpicture">
      {campaign.picture_url === "" ?
        <img src={"http://res.cloudinary.com/dps0ohgkp/image/upload/c_scale,h_380,w_620/v1478560997/placeholder3_q1ax2h.png"}/> :
        <img src={campaign.picture_url}/>
      }
      </li>
    </Link>
    <h1>{campaign.name}</h1>
    <h2>{campaign.description}</h2>
  </li>);
};

export default CampaignIndexItem;

// <button onClick={editLink(campaign.id)}>Edit</button>
// <button onClick={() => deleteCampaign(campaign.id)}>Delete</button>
