import { connect } from 'react-redux';
import { clearSessionErrors } from '../actions/session_actions';
import App from './app';
import { login } from '../actions/session_actions';

const mapDispatchToProps = dispatch => ({
  guestLogin: () => dispatch(login({user: {username: "guest", password: "password", fname: "Guest", lname: "lname"}})),
  clearSessionErrors: () => dispatch(clearSessionErrors()),
});

const mapStatetoProps = ({session}) => ({
  errors: session.errors
});

export default connect(
  mapStatetoProps,
  mapDispatchToProps
)(App);
