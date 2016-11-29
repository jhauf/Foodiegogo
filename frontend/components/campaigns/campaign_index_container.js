import { connect } from 'react-redux';
import CampaignIndex from './campaign_index';
import { fetchCampaigns, createCampaign } from '../../actions/campaign_actions';
import { receiveCategory } from '../../actions/category_actions';
import { filteredCampaigns } from '../../reducers/selector.js';

const mapStateToProps = state => ({
  campaigns: filteredCampaigns(state)
});

const mapDispatchToProps = dispatch => ({
  fetchCampaigns: () => dispatch(fetchCampaigns()),
  applyFilter: (filter) => () => {dispatch(receiveCategory(filter));}
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CampaignIndex);
