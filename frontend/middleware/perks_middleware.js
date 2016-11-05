import { CREATE_PERKS, receivePerks } from '../actions/perk_actions';

import { createPerks } from '../util/perk_api_util';

const PerksMiddleware = ({getState, dispatch}) => next => action => {
let success = perks => dispatch(receivePerks(perks));


  switch (action.type) {
    case CREATE_PERKS:
      createPerks(action.perks, success);
      return next(action);
    default:
      return next(action);
  }
};

export default PerksMiddleware;
