import { connect } from 'react-redux';
import ContributionForm from './contribution_form';
import { createContribution } from '../../actions/contribution_actions';

const mapDispatchToProps = dispatch => ({
  createContribution: contribution => dispatch(createContribution(contribution)),
});

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContributionForm);
