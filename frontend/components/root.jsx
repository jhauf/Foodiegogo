import React from 'react';
import { Provider } from 'react-redux';
import SessionFormContainer from './session_form_container';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import CampaignIndexContainer from '/Users/appacademy/Desktop/Foodiegogo/frontend/components/campaigns/campaign_index_container.js';
import CampaignFormContainer from '/Users/appacademy/Desktop/Foodiegogo/frontend/components/campaigns/campaign_form_container';
import CampaignShowContainer from '/Users/appacademy/Desktop/Foodiegogo/frontend/components/campaigns/campaign_show_container';
import App from './app';


const Root = ({ store }) => {
  const _ensureLoggedIn = (nextState, replace) => {
     const currentUser = store.getState().session.currentUser;
     if (!currentUser) {
       replace('/');
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
        <Route path="/" component={App} >
          <Route path="campaigns" component={CampaignIndexContainer} />
          <Route path="campaigns/new" component={CampaignFormContainer} />
          <Route path="campaigns/:campaignId" component={CampaignShowContainer} />
          <Route path="campaigns/:campaignId/edit" component={CampaignFormContainer} />
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;

// <IndexRoute component={CampaignIndexContainer} />
// <Route path="/home" component={Home} onEnter={_ensureLoggedIn} />
// <Route path="/login" component={SessionFormContainer} onEnter={_redirectIfLoggedIn} />
// <Route path="/signup" component={SessionFormContainer} onEnter={_redirectIfLoggedIn}/>
