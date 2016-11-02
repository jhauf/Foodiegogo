import { connect } from 'react-redux';
import { login, logout, signup } from '../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = ({session}) => ({
  loggedIn: Boolean(session.currentUser),
  errors: session.errors
});

const mapDispatchtoProps = (dispatch, {location}) => {
  const formType = location.pathname.slice(1);
  const processForm = (user) => {
    return (formType === "login") ? login(user) : signup(user);
  };

  return {
    processForm: user => dispatch(processForm(user)),
    formType,
    guestLogin: () => dispatch(login({user: {username: "guest", password: "password", fname: "Guest", lname: "lname"}}))
  };
};



export default connect(mapStateToProps, mapDispatchtoProps)(SessionForm);
