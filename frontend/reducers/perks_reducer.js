import { RECEIVE_PERK, RECEIVE_PERKS } from '../actions/perk_actions';
import merge from 'lodash/merge';


const PerksReducer = (oldState = [], action) => {
  switch (action.type) {
    case RECEIVE_PERK:
      return oldState.concat([action.perk]);
    case RECEIVE_PERKS:
      return merge([], action.perks);
    default:
      return oldState;
  }
};



export default PerksReducer;
