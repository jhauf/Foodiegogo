import { connect } from 'react-redux';
import ContributionForm from './contribution_form';
import { createContribution } from '../../actions/contribution_actions';
import { fetchPerk } from '../../actions/perk_actions';

const mapDispatchToProps = dispatch => ({
  createContribution: contribution => dispatch(createContribution(contribution)),
});

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
  perks: state.perks,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContributionForm);
