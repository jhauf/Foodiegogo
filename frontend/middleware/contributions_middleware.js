import { CREATE_CONTRIBUTION,
          receiveContribution} from '../actions/contribution_actions';
import { createContribution } from '../util/contribution_api_util';
import { hashHistory } from 'react-router';


const ContributionsMiddleware = ({getState, dispatch}) => next => action => {
  let success = contribution => {
      dispatch(receiveContribution(contribution));
      hashHistory.push(`/campaigns/`);
      hashHistory.push(`/campaigns/${action.contribution.campaign_id}`);

  };

  switch (action.type) {
    case CREATE_CONTRIBUTION:
      createContribution(action.contribution, success);
      return next(action);
    default:
      return next(action);
  }
};


export default ContributionsMiddleware;
