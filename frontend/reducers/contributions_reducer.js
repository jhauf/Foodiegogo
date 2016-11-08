import { RECEIVE_CONTRIBUTION, RECEIVE_CONTRIBUTIONS } from '../actions/contribution_actions';
import merge from 'lodash/merge';


const ContributionsReducer = (oldState = [], action) => {
  switch (action.type) {
    case RECEIVE_CONTRIBUTION:
      return oldState.concat([action.contribution]);
    case RECEIVE_CONTRIBUTIONS:
      return merge({}, action.contributions);
    default:
      return oldState;
  }
};



export default ContributionsReducer;
