import { CREATE_PERK, receivePerk } from '../actions/perk_actions';

import { createPerk } from '../util/perk_api_util';

const PerksMiddleware = ({getState, dispatch}) => next => action => {
let success = perk => dispatch(receivePerk(perk));


  switch (action.type) {
    case CREATE_PERK:
      createPerk(action.perk, success);
      return next(action);
    default:
      return next(action);
  }
};

export default PerksMiddleware;
