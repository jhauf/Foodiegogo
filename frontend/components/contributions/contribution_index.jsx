import React from 'react';
import ContributionIndexItem from './contribution_index_item';


// componentDidMount() {
//   this.props.fetchContributions(campaign);
// }
class ContributionIndex extends React.Component {


  render () {
      return (<div>
        <li className="header">Contributions</li>
        <ul className="campaignIndex">
          {
            this.props.contributions.map(contribution => (
              <ContributionIndexItem
                key={contribution.id}
                contribution={contribution} />
            ))
          }
        </ul>
      </div>);
  }
}


export default ContributionIndex;
