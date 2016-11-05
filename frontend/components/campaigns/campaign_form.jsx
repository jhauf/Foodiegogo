import React from 'react';
import $ from 'jquery';
import { Link } from 'react-router';


class CampaignForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);

    // use campaign in store if updating; start with blank campaign if new
    this.state = this.props.campaign || {
      name: "",
      goal_amt: "",
      current_amt: 0,
      description: "",
      end_date: "",
      picture_url: "",
      campaigner_id: parseInt(this.props.currentUser.id),
      perks: {"test"}
    };
  }

  componentDidMount() {
    this.props.clearCampaignErrors();
    if (this.props.params.campaignId) {
      this.props.fetchCampaign(this.props.params.campaignId);
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
    return this.setState(newProps.campaign || {
      name: "",
      goal_amt: "",
      current_amt: 0,
      description: "",
      end_date: "",
      picture_url: "",
      campaigner_id: parseInt(this.props.currentUser.id),
      perks: {"test"}
    });
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.route.path === 'campaigns/new' ? this.props.createCampaign(this.state) : this.props.updateCampaign(this.state);
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

  render () {
    const text = this.props.route.path === 'campaigns/new' ? "Create A Campaign" : "Update A Campaign";
    const backLink = this.props.route.path === 'campaigns/new' ? <Link to="/campaigns">All Campaigns</Link> :
    <Link to={"/campaigns/" + this.props.params.campaignId}>Back</Link>;
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
              value={this.state.goal_amt}
              onChange={this.update('goal_amt')}
              placeholder="$ Goal"
              />
          </label>
          </li>

          <li>
          <label> Description
            <textarea
              value={this.state.description}
              onChange={this.update('description')}
              />
          </label>
          </li>

          <li>
          <label>End Date
            <input
              type="date"
              value={this.state.end_date}
              onChange={this.update('end_date')} />
          </label>
          </li>
          <li className="photo">
            {this.state.picture_url === "" ?
              <button className= "uploadbutton" onClick={this.upload.bind(this)}>Upload a picture!</button> :
              <img src={this.state.picture_url}/>}
          </li>
          <h4 className="errors"> {this.renderErrors()} </h4>
          <input className="formbutton" type="submit" value="Submit"/>
          <li>
          {backLink}
          </li>
        </ul>
        </form>
      </div>
    );
  }
}

export default CampaignForm;
