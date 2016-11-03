import React from 'react';

class CampaignForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);

    // use campaign in store if updating; start with blank campaign if new
    this.state = this.props.campaign || { name: "", goal_amt: "", description: "" };
  }

  componentDidMount() {
    if (this.props.params) {
      this.props.fetchCampaign(this.props.params.campaignId);
    }
  }

  componentWillReceiveProps(newProps) {
    this.setState(newProps.campaign || { name: "", goal_amt: "" });
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.action(this.state);
  }

  render () {
    const text = this.props.formType === 'new' ? "Create Campaign" : "Update Campaign";
    return (
      <div>
        <h3>{text}</h3>
        <form onSubmit={this.handleSubmit}>
          <label>Name
            <input
              type="text"
              value={this.state.name}
              onChange={this.update('name')} />
          </label>

          <label>Goal Amount
            <input
              type="text"
              value={this.state.goal_amt}
              onChange={this.update('goal_amt')} />
          </label>

          <label> Description
            <textarea
              value={this.state.description}
              onChange={this.update('description')} />
          </label>

          <label>End Date
            <input
              type="text"
              value={this.state.end_date}
              onChange={this.update('end_date')} />
          </label>

          <input type="submit" value={text} />
        </form>
      </div>
    );
  }
}

export default CampaignForm;
