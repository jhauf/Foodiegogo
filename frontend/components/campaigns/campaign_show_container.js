import { connect } from 'react-redux';
import CampaignShow from './campaign_show';
import { fetchCampaign, fetchCampaigns, deleteCampaign } from '../../actions/campaign_actions';

const mapStateToProps = (state, ownProps) => {
  const matchingPerks = state.perks.map(perk => (
    perk.campaign_id === parseInt(ownProps.params.campaignId)
  ));
  return {
    campaign: state.campaigns[parseInt(ownProps.params.campaignId)],
    currentUser: state.session.currentUser,
    perks: matchingPerks
  };

};
// perks: state.perks[]


const mapDispatchToProps = dispatch => ({
  fetchCampaign: id => dispatch(fetchCampaign(id)),
  fetchCampaigns: id => dispatch(fetchCampaigns()),
  deleteCampaign: id => dispatch(deleteCampaign(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CampaignShow);
