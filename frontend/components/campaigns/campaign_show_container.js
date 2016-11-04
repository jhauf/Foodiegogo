import { connect } from 'react-redux';
import CampaignShow from './campaign_show';
import { fetchCampaign, fetchCampaigns } from '../../actions/campaign_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    campaign: state.campaigns[parseInt(ownProps.params.campaignId)],
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = dispatch => ({
  fetchCampaign: id => dispatch(fetchCampaign(id)),
  fetchCampaigns: id => dispatch(fetchCampaigns())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CampaignShow);
