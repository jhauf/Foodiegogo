import {
  receiveCampaign,
  receiveAllCampaigns,
  removeCampaign,
  receiveCampaignErrors,
  FETCH_CAMPAIGNS,
  FETCH_CAMPAIGN,
  CREATE_CAMPAIGN,
  UPDATE_CAMPAIGN,
  DELETE_CAMPAIGN,
  QUERY_DATABASE
} from '../actions/campaign_actions';

import {
  createCampaign,
  deleteCampaign,
  updateCampaign,
  fetchCampaigns,
  fetchCampaign,
  queryDatabase
} from '../util/campaign_api_util';
import { hashHistory } from 'react-router';

const CampaignsMiddleware = ({getState, dispatch}) => next => action => {
  let success;
  let receiveAllCampaignsSuccess = campaigns => dispatch(receiveAllCampaigns(campaigns));
  let receiveCampaignSuccess = campaign => dispatch(receiveCampaign(campaign));
  let removeCampaignSuccess = campaign => dispatch(removeCampaign(campaign));
  let error = errors => dispatch(receiveCampaignErrors(errors.responseJSON));


  switch (action.type) {
    case FETCH_CAMPAIGNS:
      fetchCampaigns(receiveAllCampaignsSuccess);
      return next(action);
    case FETCH_CAMPAIGN:
      fetchCampaign(action.id, receiveCampaignSuccess);
      return next(action);
    case CREATE_CAMPAIGN:
      success = campaign => {
        dispatch(receiveCampaign(campaign));
        hashHistory.push(`/campaigns/${campaign.id}`);
      };
      createCampaign(action.campaign, success, error);
      return next(action);
    case UPDATE_CAMPAIGN:
      success = campaign => {
        dispatch(receiveCampaign(campaign));
        hashHistory.push(`/campaigns/${campaign.id}`);
      };
      updateCampaign(action.campaign, success, error);
      return next(action);
    case DELETE_CAMPAIGN:
      deleteCampaign(action.id, removeCampaignSuccess);
      return next(action);
    case QUERY_DATABASE:
      queryDatabase(action.query, receiveAllCampaignsSuccess);
      return next(action);
    default:
      return next(action);
  }
};

export default CampaignsMiddleware;
