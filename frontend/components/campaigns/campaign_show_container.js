import { connect } from 'react-redux';
import CampaignShow from './campaign_show';
import { fetchCampaign } from '../../actions/campaign_actions';

const mapStateToProps = (state, ownProps) => {
  debugger
  return {
    campaign: state.campaigns[ownProps.params.campaignId]
  };
};

const mapDispatchToProps = dispatch => ({
  fetchCampaign: id => dispatch(fetchCampaign(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CampaignShow);
