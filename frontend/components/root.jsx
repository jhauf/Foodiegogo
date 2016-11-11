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

   const fetchCampaignOnEnter = (nextState, replace) => {
     _ensureLoggedIn(nextState, replace);
     store.dispatch(fetchCampaign(parseInt(nextState.params.campaignId)));
     store.dispatch(fetchPerks(parseInt(nextState.params.campaignId)));
     store.dispatch(fetchContributions(parseInt(nextState.params.campaignId)));
   };

   const fetchCampaignsOnEnter = (nextState, replace) => {
     _ensureLoggedIn(nextState, replace);
     store.dispatch(fetchCampaigns());
   };


  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={AppContainer}>
          <Route path="campaigns" component={CampaignIndexContainer} onEnter={fetchCampaignsOnEnter}/>
          <Route path="campaigns/new" component={CampaignFormContainer}  onEnter={fetchCampaignOnEnter} />
          <Route path="campaigns/:campaignId" component={CampaignShowContainer} onEnter={fetchCampaignOnEnter}/>
          <Route path="campaigns/:campaignId/edit" component={CampaignFormContainer} onEnter={fetchCampaignOnEnter}/>
          <Route path="campaigns/:campaignId/perk/new" component={PerkFormContainer} onEnter={fetchCampaignOnEnter}/>
          <Route path="campaigns/:campaignId/perk/:perkId/edit" component={PerkFormContainer} onEnter={fetchCampaignOnEnter}/>
      </Route>
      </Router>
    </Provider>
  );
};


export default Root;
