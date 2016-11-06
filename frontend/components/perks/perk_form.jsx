import React from 'react';
import $ from 'jquery';
import { Link } from 'react-router';

class PerkForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = this.props.perk || {
      id: parseInt(this.props.params.perkId),
      name: "",
      donation_amt: 0,
      picture_url: "",
      campaign_id: parseInt(this.props.params.campaignId)
    }
  }

  upload (e) {
    e.preventDefault();
    const that = this;
    cloudinary.openUploadWidget({upload_preset: "a4fzicsk", cloud_name: 'dps0ohgkp'}, (error, results) => {
      if (!error){
        that.setState({picture_url: results[0].url});
      } else {
        console.log(error);
      }
    });
  }

  componentWillReceiveProps (newProps) {
    return this.setState(newProps.perk || {
      name: "",
      donation_amt: 0,
      picture_url: "",
      campaign_id: parseInt(this.props.params.campaignId)
    });
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  handleSubmit(e) {
    debugger
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

          <li className="photo">
            {this.state.picture_url === "" ?
              <button className= "uploadbutton" onClick={this.upload.bind(this)}>Upload a picture!</button> :
              <img src={this.state.picture_url}/>}
          </li>

          <li>
          <input className="formbutton" type="submit" value="Submit"/>
          </li>
        </ul>
        </form>
      </div>
    );
  }
}



export default PerkForm;
// <h4 className="errors"> {this.renderErrors()} </h4>
// <Link to={"/campaigns/" + this.state.campaign_id}>Back</Link>;



// this.renderErrors = this.renderErrors.bind(this);
// <Link to={"/campaigns/" + this.props.params.campaignId}>Back</Link>;
