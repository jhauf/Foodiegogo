import React from 'react';
import { Provider } from 'react-redux';
import SessionFormContainer from './session/session_form_container';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import PerkFormContainer from './perks/perk_form_container.js';
import CampaignIndexContainer from './campaigns/campaign_index_container';
import CampaignFormContainer from './campaigns/campaign_form_container';
import CampaignShowContainer from './campaigns/campaign_show_container';

import App from './app';
import { fetchCampaigns } from '../actions/campaign_actions';
import { fetchPerks } from '../actions/perk_actions';

const Root = ({ store }) => {
  const _ensureLoggedIn = (nextState, replace) => {
     const currentUser = store.getState().session.currentUser;
     if (!currentUser) {
       replace('/');
     }
   };
   //
  //  const _redirectIfLoggedIn = (nextState, replace) => {
  //    const currentUser = store.getState().session.currentUser;
  //    if (currentUser) {
  //      replace('/home');
  //    }
  //  };

   const fetchOnEnter = () => {
     fetchCampaigns();
     fetchPerks();
   };


  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={App} onEnter={fetchOnEnter}>
            <Route path="campaigns" component={CampaignIndexContainer} onEnter={_ensureLoggedIn}/>
              <Route path="campaigns/new" component={CampaignFormContainer} onEnter={_ensureLoggedIn} />
            <Route path="campaigns/:campaignId" component={CampaignShowContainer} onEnter={_ensureLoggedIn}/>
            <Route path="campaigns/:campaignId/edit" component={CampaignFormContainer} onEnter={_ensureLoggedIn}/>
            <Route path="campaigns/:campaignId/perk/new" component={PerkFormContainer} onEnter={_ensureLoggedIn}/>
            <Route path="campaigns/:campaignId/perk/:perkId/edit" component={PerkFormContainer} onEnter={_ensureLoggedIn}/>
      </Route>
      </Router>
    </Provider>
  );
};


export default Root;

// <Route path="/home" component={Home} onEnter={_ensureLoggedIn} />
// <Route path="/login" component={SessionFormContainer} onEnter={_redirectIfLoggedIn} />
// <Route path="/signup" component={SessionFormContainer} onEnter={_redirectIfLoggedIn}/>
