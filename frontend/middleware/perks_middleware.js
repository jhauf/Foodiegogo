import { CREATE_PERK,
          FETCH_PERKS,
          UPDATE_PERK,
          FETCH_PERK,
          receivePerk,
          receivePerks,
          receivePerkErrors} from '../actions/perk_actions';

import { createPerk, fetchPerks, updatePerk, fetchPerk } from '../util/perk_api_util';
import { hashHistory } from 'react-router';


const PerksMiddleware = ({getState, dispatch}) => next => action => {
let success = perk => {
    dispatch(receivePerk(perk));
    hashHistory.push(`/campaigns/${action.perk.campaign_id}`);
};
let error = errors => dispatch(receivePerkErrors(errors.responseJSON));

let successAll = perks => dispatch(receivePerks(perks));
  switch (action.type) {
    case CREATE_PERK:
      createPerk(action.perk, success, error);
      return next(action);
    case FETCH_PERKS:
      fetchPerks(action.id, successAll);
      return next(action);
    case FETCH_PERK:
      fetchPerk(action.id, success);
      return next(action);
    case UPDATE_PERK:
      updatePerk(action.perk, success, error);
      return next(action);
    default:
      return next(action);
  }
};

export default PerksMiddleware;
