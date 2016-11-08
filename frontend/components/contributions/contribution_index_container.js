import { connect } from 'react-redux';
import ContributionIndex from './contribution_index';
import { fetchContributions } from '../../actions/contribution_actions';

const mapStateToProps = state => ({
  contributions: state.contributions,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  fetchContributions: (id) => dispatch(fetchContributions(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContributionIndex);
