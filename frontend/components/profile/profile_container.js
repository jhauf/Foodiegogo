import { connect } from 'react-redux';
import Profile from './profile';

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser
});



export default connect(
  mapStateToProps,
  null
)(Profile);
