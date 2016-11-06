import { connect } from 'react-redux';
import PerkForm from './perk_form.jsx';
import { createPerk, fetchPerks, updatePerk } from '../../actions/perk_actions';

const mapDispatchToProps = dispatch => ({
  createPerk: perk => dispatch(createPerk(perk)),
  fetchPerks: () => dispatch(fetchPerks()),
  updatePerk: perk => dispatch(updatePerk(perk))
});

const mapStateToProps = (state, ownProps) => {
  return {
  perk: state.perks[ownProps.params.perkId],
  };
};

export default connect(
  null,
  mapDispatchToProps
)(PerkForm);



// errors: state.errors


// fetchPerk: id => dispatch(fetchPerk(id)),
// updatePerk: campaign => dispatch(updatePerk(campaign)),
// clearCampaignErrors: () => dispatch(clearCampaignErrors())
