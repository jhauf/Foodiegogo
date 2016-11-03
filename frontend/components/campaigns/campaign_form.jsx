import React from 'react';

class CampaignForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);

    // use campaign in store if updating; start with blank campaign if new
    this.state = this.props.campaign || {
      name: "",
      goal_amt: "",
      description: "",
      end_date: "",
      picture_url: ""
    };
  }

  componentDidMount() {
    if (this.props.params) {
      this.props.fetchCampaign(this.props.params.campaignId);
    }
  }

  componentWillReceiveProps(newProps) {
    return this.setState(newProps.campaign || {
      name: "",
      goal_amt: "",
      description: "",
      end_date: "",
      picture_url: ""
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
    const text = this.props.route.path === 'campaigns/new' ? "Create Campaign" : "Update Campaign";
    return (
      <div>
        <form className="campaign_form" onSubmit={this.handleSubmit}>
        <ul>
        <h3>{text}</h3>
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

          <li>
          <label>Upload a Picture
            <input
              type="file"
              value={this.state.end_date}
              onChange={this.update('end_date')} />
          </label>
          </li>

          <input className="formbutton" type="submit" value={text} />
        </ul>
        </form>
      </div>
    );
  }
}

export default CampaignForm;
