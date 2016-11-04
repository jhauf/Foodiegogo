import React from 'react';
import $ from 'jquery';


class CampaignForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);

    // use campaign in store if updating; start with blank campaign if new
    this.state = this.props.campaign || {
      name: "",
      goal_amt: "",
      current_amt: 0,
      description: "",
      end_date: "",
      picture_url: "",
      campaigner_id: this.props.currentUser
    };
  }

  componentDidMount() {
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


  render () {
    const text = this.props.route.path === 'campaigns/new' ? "Create A Campaign" : "Update A Campaign";
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
          <label> $
            <input
              type="text"
              value={this.state.goal_amt}
              onChange={this.update('goal_amt')}
              placeholder="Goal"
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
              <button className= "upload-form" onClick={this.upload.bind(this)}>Upload new image!</button> :
              <img src={this.state.picture_url}/>}
          </li>
          <input className="formbutton" type="submit" value="submit" />
        </ul>
        </form>
      </div>
    );
  }
}

export default CampaignForm;
