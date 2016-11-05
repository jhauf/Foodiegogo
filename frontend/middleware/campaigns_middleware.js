import {
  receiveCampaign,
  receiveAllCampaigns,
  removeCampaign,
  receiveErrors,
  FETCH_CAMPAIGNS,
  FETCH_CAMPAIGN,
  CREATE_CAMPAIGN,
  UPDATE_CAMPAIGN,
  DELETE_CAMPAIGN
} from '../actions/campaign_actions';

import {
  createCampaign,
  deleteCampaign,
  updateCampaign,
  fetchCampaigns,
  fetchCampaign
} from '../util/campaign_api_util';
import { hashHistory } from 'react-router';

const CampaignsMiddleware = ({getState, dispatch}) => next => action => {
  let success;
  let error = e => console.log(e.responseJSON);
  let receiveAllCampaignsSuccess = campaigns => dispatch(receiveAllCampaigns(campaigns));
  let receiveCampaignSuccess = campaign => dispatch(receiveCampaign(campaign));
  let removeCampaignSuccess = campaign => dispatch(removeCampaign(campaign));
  const errorCallback = xhr => dispatch(receiveErrors(xhr.responseJSON));


  switch (action.type) {
    case FETCH_CAMPAIGNS:
      fetchCampaigns(receiveAllCampaignsSuccess, errorCallback);
      return next(action);
    case FETCH_CAMPAIGN:
      fetchCampaign(action.id, receiveCampaignSuccess, errorCallback);
      return next(action);
    case CREATE_CAMPAIGN:
      success = campaign => {
        dispatch(receiveCampaign(campaign));
        hashHistory.push(`/campaigns/${campaign.id}`);
      };
      createCampaign(action.campaign, success, errorCallback);
      return next(action);
    case UPDATE_CAMPAIGN:
      success = campaign => {
        dispatch(receiveCampaign(campaign));
        hashHistory.push(`/campaigns/${campaign.id}`);
      };
      updateCampaign(action.campaign, success, errorCallback);
      return next(action);
    case DELETE_CAMPAIGN:
      deleteCampaign(action.id, removeCampaignSuccess, errorCallback);
      return next(action);
    default:
      return next(action);
  }
};

export default CampaignsMiddleware;
