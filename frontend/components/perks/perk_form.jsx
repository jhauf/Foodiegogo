import React from 'react';
import $ from 'jquery';
import { Link } from 'react-router';

// this.props.perk is undefined, fix later
// componentDidMount() {
//   this.props.fetchPerks(parseInt(this.props.params.campaignId));
// }
class PerkForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = this.props.perk || {
      name: "",
      donation_amt: "",
      description: "",
      campaign_id: parseInt(this.props.params.campaignId)
    };
  }


  componentWillReceiveProps (newProps) {
    return this.setState(newProps.perk || {
      name: "",
      donation_amt: "",
      description: "",
      campaign_id: parseInt(this.props.params.campaignId)
    });
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  renderErrors() {
    if (this.props.errors) {
      return (
        this.props.errors.map((error) => {
          return (<li className="errors" key={error}>{error}</li>);
        })
      );
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.route.path === 'campaigns/:campaignId/perk/new' ? this.props.createPerk(this.state) : this.props.updatePerk(this.state);
  }

  render () {
    const text = this.props.route.path === 'campaigns/:campaignId/perk/new' ? "Create A Perk" : "Update A Perk";
    return (
      <div>
        <form className="campaignform" onSubmit={this.handleSubmit}>
        <ul>
        <h1>{text}</h1>
          <li>
          <label>
            <input
              type="text"
              value={this.state.name}
              onChange={this.update('name')}
              placeholder="Name"/>
          </label>
          </li>

          <li>
          <label>
            <input
              type="text"
              value={this.state.donation_amt}
              onChange={this.update('donation_amt')}
              placeholder="Donation Amount"
              />
          </label>
          </li>

          <li>
          <label>
            <input
              type="text"
              value={this.state.description}
              onChange={this.update('description')}
              placeholder="Description"
              />
          </label>
          </li>
          <li>
            <h4 className="errors"> {this.renderErrors()} </h4>
          <input className="formbutton" type="submit" value="Submit"/>
          </li>
        </ul>
        </form>
      </div>
    );
  }
}



export default PerkForm;
// <Link to={"/campaigns/" + this.state.campaign_id}>Back</Link>;



// this.renderErrors = this.renderErrors.bind(this);
// <Link to={"/campaigns/" + this.props.params.campaignId}>Back</Link>;
