import React from 'react';
import { Provider } from 'react-redux';
import SessionFormContainer from './session_form_container';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import Home from './home';

import App from './app';


const Root = ({ store }) => {
  const _ensureLoggedIn = (nextState, replace) => {
     const currentUser = store.getState().session.currentUser;
     if (!currentUser) {
       replace('/login');
     }
   };

   const _redirectIfLoggedIn = (nextState, replace) => {
     const currentUser = store.getState().session.currentUser;
     if (currentUser) {
       replace('/home');
     }
   };

  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
            <Route path="/home" component={Home}/>
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;

// <Route path="/login" component={SessionFormContainer} onEnter={_redirectIfLoggedIn} />
// <Route path="/signup" component={SessionFormContainer} onEnter={_redirectIfLoggedIn}/>
