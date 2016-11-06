import { RECEIVE_PERK } from '../actions/perk_actions';
import merge from 'lodash/merge';


const PerksReducer = (oldState = [], action) => {
  switch (action.type) {
    case RECEIVE_PERK:
    return oldState.concat(action.perk);
    default:
      return oldState;
  }
};

export default PerksReducer;
