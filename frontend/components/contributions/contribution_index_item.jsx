import React from 'react';


const ContributionIndexItem = ({ contribution }) => {
  return (
  <li className="contributionIndexItem">
    <h1> Date: {contribution.date}</h1>
    <h2> Donation: ${contribution.donation_amt}</h2>
    <h2> Campaign {contribution.campaign_id}</h2>
    <h2> Contributor {contribution.contributor_id}</h2>
  </li>);
};

export default ContributionIndexItem;
