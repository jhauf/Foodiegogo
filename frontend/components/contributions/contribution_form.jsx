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
    this.duplicate = this.duplicate.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createContribution(this.state);
  }
  duplicate() {
    let contributors = this.props.campaign.contributors;
    for (var i = 0; i < contributors.length; i++) {
      if (this.props.currentUser.id === contributors[i].id) {
        return <h2>You have already made a contribution</h2>;
      }
    }
    return (<div className="formbackground">
      <form className="perkform" onSubmit={this.handleSubmit}>
      <ul>
      <h2>Are you sure you want to make a contribution?</h2>
        <li>
        <input className="formbutton" type="submit" value="Yes"/>
        </li>
      </ul>
      </form>
    </div>);
  }


  render () {
    return this.duplicate();
  }
}



export default ContributionForm;
