import { connect } from 'react-redux';
import CampaignShow from './campaign_show';
import { fetchCampaign, fetchCampaigns, deleteCampaign } from '../../actions/campaign_actions';
import { fetchPerks } from '../../actions/perk_actions';
import { fetchContributions } from '../../actions/contribution_actions';


const mapStateToProps = (state, ownProps) => {
  return {
    campaign: state.campaigns[parseInt(ownProps.params.campaignId)],
    currentUser: state.session.currentUser,
    perks: state.perks
  };
};

const mapDispatchToProps = dispatch => ({
  fetchCampaign: id => dispatch(fetchCampaign(id)),
  fetchCampaigns: () => dispatch(fetchCampaigns()),
  deleteCampaign: id => dispatch(deleteCampaign(id)),
  fetchPerks: (id) => dispatch(fetchPerks(id)),
  fetchContributions: (id) => dispatch(fetchContributions(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CampaignShow);


// const matchingPerks = state.perks.map(perk => (
//   perk.campaign_id === parseInt(ownProps.params.campaignId)
// ));
