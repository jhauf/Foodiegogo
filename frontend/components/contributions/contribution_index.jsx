import React from 'react';
import ContributionIndexItem from './contribution_index_item';


const ContributionIndex = ({ contributions }) => (
    <div className="contributionTable">
      <ul className="contributionIndex">
        <li className="contributionheader">Contributions</li>
        <li className="contributionIndexItem">
          <h1>Date</h1>
          <h1>Name</h1>
            <h1>Amount</h1>
        </li>
        {
          contributions.map((contribution, i) => (
            <ContributionIndexItem
              className="contribution"
              key={`contribution-${i}`}
              contribution={contribution} />
          ))
        }
      </ul>
    </div>
);


export default ContributionIndex;
