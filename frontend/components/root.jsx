import React from 'react';
import { Provider } from 'react-redux';
import SessionFormContainer from './session/session_form_container';
import { Router, Route, IndexRoute, hashHistory, IndexRedirect} from 'react-router';
import PerkFormContainer from './perks/perk_form_container.js';
import CampaignIndexContainer from './campaigns/campaign_index_container';
import CampaignFormContainer from './campaigns/campaign_form_container';
import CampaignShowContainer from './campaigns/campaign_show_container';

import AppContainer from './app_container';
import { fetchCampaigns, fetchCampaign } from '../actions/campaign_actions';
import { fetchContributions } from '../actions/contribution_actions';
import { fetchPerks } from '../actions/perk_actions';

const Root = ({ store }) => {
  const _ensureLoggedIn = (nextState, replace) => {
     const currentUser = store.getState().session.currentUser;
     if (!currentUser) {
       replace('/');
     }
   };

   const fetchOnEnter = (nextState, replace) => {
     _ensureLoggedIn(nextState, replace);
     store.dispatch(fetchCampaign(parseInt(nextState.params.campaignId)));
     store.dispatch(fetchCampaigns());
     store.dispatch(fetchPerks(parseInt(nextState.params.campaignId)));
     store.dispatch(fetchContributions(parseInt(nextState.params.campaignId)));
   };


  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={AppContainer}>
          <Route path="campaigns" component={CampaignIndexContainer} onEnter={fetchOnEnter}/>
          <Route path="campaigns/new" component={CampaignFormContainer}  onEnter={fetchOnEnter} />
          <Route path="campaigns/:campaignId" component={CampaignShowContainer} onEnter={fetchOnEnter}/>
          <Route path="campaigns/:campaignId/edit" component={CampaignFormContainer} onEnter={fetchOnEnter}/>
          <Route path="campaigns/:campaignId/perk/new" component={PerkFormContainer} onEnter={fetchOnEnter}/>
          <Route path="campaigns/:campaignId/perk/:perkId/edit" component={PerkFormContainer} onEnter={fetchOnEnter}/>
      </Route>
      </Router>
    </Provider>
  );
};


export default Root;

// <Route path="/home" component={Home} onEnter={_ensureLoggedIn} />
// <Route path="/login" component={SessionFormContainer} onEnter={_redirectIfLoggedIn} />
// <Route path="/signup" component={SessionFormContainer} onEnter={_redirectIfLoggedIn}/>


//  fetchCampaign(parseInt(nextState.params.))


//
//  const redirect = (nextstate, replace) => {
//      replace('/campaigns');
//  };

//  const redirect = (nextState, replace) => {
//    const currentUser = store.getState().session.currentUser;
//    if (currentUser) {
//      replace('/campaigns');
//    }
//  };

//  const fetchOnEnter = () => {
//    fetchCampaigns();
//    fetchPerks();
//  };
