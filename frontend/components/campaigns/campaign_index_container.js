import { connect } from 'react-redux';
import CampaignIndex from './campaign_index';
import { fetchCampaigns, createCampaign } from '../../actions/campaign_actions';

const mapStateToProps = state => ({
  campaigns: Object.keys(state.campaigns).map(id => state.campaigns[id]),
});

const mapDispatchToProps = dispatch => ({
  fetchCampaigns: () => dispatch(fetchCampaigns()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CampaignIndex);
