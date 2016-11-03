import React from 'react';

class CampaignForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);

    // use campaign in store if updating; start with blank campaign if new
    this.state = this.props.campaign || { title: "", body: "" };
  }

  componentDidMount() {
    if (this.props.params) {
      this.props.fetchCampaign(this.props.params.campaignId);
    }
  }

  componentWillReceiveProps(newProps) {
    this.setState(newProps.campaign || { title: "", body: "" });
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
          <label>Title
            <input
              type="text"
              value={this.state.title}
              onChange={this.update('title')} />
          </label>

          <label>
            <textarea
              value={this.state.description}
              onChange={this.update('description')} />
          </label>

          <input type="submit" value={text} />
        </form>
      </div>
    );
  }
}

export default CampaignForm;
