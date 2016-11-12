import React from 'react';

const ContributionIndexItem = ({ contribution }) => {
  const calculateDate = (date) => {

    const MONTHS = [0, "Jan", "Feb", "Mar",
                    "Apr", "May", "Jun",
                    "Jul", "Aug", "Sep",
                    "Oct", "Nov", "Dec"];

    let year = date.split("-")[0];
    let month = MONTHS[date.split("-")[1]];
    let day = date.split("-")[2];
    return `${month} ${day}, ${year}`;
  };


  return contribution ?
  (<li className="contributionIndexItem">
    <h2> {calculateDate(contribution.date)}</h2>
    <h2> { `${contribution.contributor.fname} ${contribution.contributor.lname}` }</h2>
    <h2> ${contribution.donation_amt}</h2>
  </li>) : (<div></div>);
};

export default ContributionIndexItem;
