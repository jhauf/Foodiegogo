import { CREATE_CONTRIBUTION,
         FETCH_CONTRIBUTIONS,
         receiveContribution,
         receiveContributions } from '../actions/contribution_actions';
import { createContribution,
        fetchContributions } from '../util/contribution_api_util';
import { hashHistory } from 'react-router';


const ContributionsMiddleware = ({getState, dispatch}) => next => action => {
  let success = contribution => {
      dispatch(receiveContribution(contribution));
      const campaignId = action.contribution.campaign_id;
      hashHistory.push(`/campaigns/`);
      hashHistory.push(`/campaigns/${campaignId}`);
  };

  let successAll = contributions => {
      dispatch(receiveContributions(contributions));

  };

  switch (action.type) {
    case CREATE_CONTRIBUTION:
      createContribution(action.contribution, success);
      return next(action);
    case FETCH_CONTRIBUTIONS:
      fetchContributions(action.id, successAll);
      return next(action);
    default:
      return next(action);
  }
};


export default ContributionsMiddleware;
