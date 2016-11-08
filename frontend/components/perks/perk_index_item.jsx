import React from 'react';
import { Link, hashHistory } from 'react-router';

const PerkIndexItem = ({perk, router, campaign, currentUser}) => {
  return(
    <li className="perk">
      <li className="first"> Pledge ${perk.donation_amt} or more </li>
      <li className="second"> {perk.name}</li>
      <li> {perk.description}</li>
      {currentUser.id === campaign.campaigner_id ?
        <li className="edit"><Link to={"/campaigns/" + perk.campaign_id + "/perk/" + perk.id + "/edit"}>Edit</Link></li> :
          <div></div>}
    </li>
  );
};



export default PerkIndexItem;
