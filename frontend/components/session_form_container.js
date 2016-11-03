import { connect } from 'react-redux';
import { login, logout, signup } from '../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = ({session}, ownProps) => ({
  loggedIn: Boolean(session.currentUser),
  errors: session.errors
});

const mapDispatchtoProps = (dispatch, ownProps) => {
  let formType;
  const processForm = (user) => {
    if (ownProps.type === true) {
      formType = 'login';
      return login(user);
    } else {
      formType = 'signup';
      return signup(user);
     }
  };

  return {
    processForm: user => dispatch(processForm(user)),
    formType,
    guestLogin: () => dispatch(login({user: {username: "guest", password: "password", fname: "Guest", lname: "lname"}}))
  };
};



export default connect(mapStateToProps, mapDispatchtoProps)(SessionForm);
