import { connect } from 'react-redux';
import CampaignForm from './campaign_form';
import { fetchCampaign, updateCampaign, createCampaign } from '../../actions/campaign_actions';

const mapStateToProps = (state, ownProps) => ({
  campaign: state.campaigns[ownProps.params.campaignId],
  currentUser: state.session.currentUser
});


const mapDispatchToProps = dispatch => ({
  fetchCampaign: id => dispatch(fetchCampaign(id)),
  updateCampaign: campaign => dispatch(updateCampaign(campaign)),
  createCampaign: campaign => dispatch(createCampaign(campaign))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CampaignForm);
