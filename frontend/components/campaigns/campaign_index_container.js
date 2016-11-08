import { connect } from 'react-redux';
import CampaignIndex from './campaign_index';
import { fetchCampaigns, deleteCampaign, createCampaign } from '../../actions/campaign_actions';

const mapStateToProps = state => ({
  campaigns: Object.keys(state.campaigns).map(id => state.campaigns[id]),
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  fetchCampaigns: () => dispatch(fetchCampaigns()),
  deleteCampaign: id => dispatch(deleteCampaign(id)),
  createCampaign: campaign => dispatch(createCampaign(campaign))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CampaignIndex);
