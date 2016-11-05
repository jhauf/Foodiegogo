import { connect } from 'react-redux';
import CampaignForm from './campaign_form';
import { fetchCampaign, updateCampaign, createCampaign, clearCampaignErrors } from '../../actions/campaign_actions';

const mapStateToProps = (state, ownProps) => {
  return {
  campaign: state.campaigns[ownProps.params.campaignId],
  currentUser: state.session.currentUser,
  errors: state.errors
};
};


const mapDispatchToProps = dispatch => ({
  fetchCampaign: id => dispatch(fetchCampaign(id)),
  updateCampaign: campaign => dispatch(updateCampaign(campaign)),
  createCampaign: campaign => dispatch(createCampaign(campaign)),
  clearCampaignErrors: () => dispatch(clearCampaignErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CampaignForm);
