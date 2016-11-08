import { RECEIVE_CONTRIBUTION } from '../actions/contribution_actions';
import merge from 'lodash/merge';


const ContributionsReducer = (oldState = [], action) => {
  switch (action.type) {
    case RECEIVE_CONTRIBUTION:
      return oldState.concat([action.contribution]);
    default:
      return oldState;
  }
};



export default ContributionsReducer;
