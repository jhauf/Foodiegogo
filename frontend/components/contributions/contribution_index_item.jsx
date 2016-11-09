import React from 'react';

const ContributionIndexItem = ({ contribution }) => {
  return contribution ?
  (<li className="contributionIndexItem">
    <h1> Date: {contribution.date}</h1>
    <h2> Donation: ${contribution.donation_amt}</h2>
    <h2> Contributor {contribution.contributor.fname} {contribution.contributor.lname}</h2>
  </li>) : (<div></div>);
};

export default ContributionIndexItem;
