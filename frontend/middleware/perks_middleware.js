import { CREATE_PERK, FETCH_PERKS, UPDATE_PERK, receivePerk, receivePerks } from '../actions/perk_actions';

import { createPerk, fetchPerks, updatePerk } from '../util/perk_api_util';
import { hashHistory } from 'react-router';


const PerksMiddleware = ({getState, dispatch}) => next => action => {
let success = perk => {
    dispatch(receivePerk(perk));
    hashHistory.push(`/campaigns/${action.perk.campaign_id}`);
};

let successAll = perks => dispatch(receivePerks(perks));
  switch (action.type) {
    case CREATE_PERK:
      createPerk(action.perk, success);
      return next(action);
    case FETCH_PERKS:
      fetchPerks(successAll);
      return next(action);
    case UPDATE_PERK:
      updatePerk(action.perk, success);
      return next(action);
    default:
      return next(action);
  }
};

export default PerksMiddleware;
