import { CREATE_PERK, FETCH_PERKS, receivePerk, receivePerks } from '../actions/perk_actions';

import { createPerk, fetchPerks } from '../util/perk_api_util';

const PerksMiddleware = ({getState, dispatch}) => next => action => {
let success = perk => dispatch(receivePerk(perk));
let successAll = perks => dispatch(receivePerks(perks));

  switch (action.type) {
    case CREATE_PERK:
      createPerk(action.perk, success);
      return next(action);
    case FETCH_PERKS:
      fetchPerks(successAll);
      return next(action);
    default:
      return next(action);
  }
};

export default PerksMiddleware;
