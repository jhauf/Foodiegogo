import { connect } from 'react-redux';
import { logout, clearErrors } from '../../actions/session_actions';
import Navbar from './navbar';
import { fetchCampaigns } from '../../actions/campaign_actions';


const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  clearErrors: () => dispatch(clearErrors()),
  fetchCampaigns: () => dispatch(fetchCampaigns())

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
