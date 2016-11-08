import { RECEIVE_ALL_CAMPAIGNS,
         RECEIVE_CAMPAIGN,
         REMOVE_CAMPAIGN } from '../actions/campaign_actions';
import merge from 'lodash/merge';



const CampaignsReducer = (oldState = {}, action) => {
  switch (action.type) {
    case RECEIVE_ALL_CAMPAIGNS:
      return merge({}, action.campaigns);
    case RECEIVE_CAMPAIGN:
      return merge({}, oldState, {[action.campaign.id]: action.campaign});
    case REMOVE_CAMPAIGN:
      let newState = merge({}, oldState);
      delete newState[action.campaign.id];
      return newState;
    default:
      return oldState;
  }
};

export default CampaignsReducer;
