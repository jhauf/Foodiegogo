import { connect } from 'react-redux';
import CampaignForm from './campaign_form';
import { fetchCampaign, updateCampaign } from '../../actions/campaign_actions';

const mapStateToProps = (state, ownProps) => ({
  campaigns: state.campaigns[ownProps.params.campaignId]
});

const mapDispatchToProps = dispatch => ({
  fetchCampaign: id => dispatch(fetchCampaign(id)),
  action: campaign => dispatch(updateCampaign(campaign))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CampaignForm);
