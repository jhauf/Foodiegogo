import React from 'react';

const ContributionIndexItem = ({ contribution }) => {
  return contribution ?
  (<li className="contributionIndexItem">
    <h2> {contribution.date}</h2>
    <h2> {contribution.contributor.fname} {contribution.contributor.lname}</h2>
    <h2> ${contribution.donation_amt}</h2>
  </li>) : (<div></div>);
};

export default ContributionIndexItem;
