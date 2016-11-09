import React from 'react';
import $ from 'jquery';
import { Link } from 'react-router';


class ContributionForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      date: new Date(Date.now()),
      contributor_id: this.props.currentUser.id,
      campaign_id: parseInt(this.props.campaign.id),
      perk_id: this.props.perkKey,
      donation_amt: this.props.perks[this.props.perkKey].donation_amt,
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createContribution(this.state);
  }



  render () {
    return (
      <div>
        <form className="campaignform" onSubmit={this.handleSubmit}>
        <ul>
        <h1>Are you sure you would like to make a contribution?</h1>
          <li>
          <input className="formbutton" type="submit" value="Yes"/>
          </li>
        </ul>
        </form>
      </div>
    );
  }
}



export default ContributionForm;
