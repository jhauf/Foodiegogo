import React from 'react';
import ContributionIndexItem from './contribution_index_item';

// componentDidMount() {
//     this.props.fetchContributions(this.props.contributions[0].campaign_id);
// }

class ContributionIndex extends React.Component {
  constructor(props) {
    super(props);
  }



render () {
  return this.props.contributions ?
  (
    <div>
      <li className="header">Contributions</li>
      <ul className="contributionIndex">
        {
          this.props.contributions.map((contribution, i) => (
            <ContributionIndexItem
              key={`contribution-${i}`}
              contribution={contribution} />
          ))}
      </ul>
    </div>) :
    <div></div>;
    }
}


export default ContributionIndex;
