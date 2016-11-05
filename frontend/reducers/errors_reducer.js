import { RECEIVE_CAMPAIGN_ERRORS,
        CLEAR_CAMPAIGN_ERRORS } from '../actions/campaign_actions';
import merge from 'lodash/merge';


const ErrorsReducer = (oldState = [], action) => {
  switch (action.type) {
    case RECEIVE_CAMPAIGN_ERRORS:
      return [...action.errors];
    case CLEAR_CAMPAIGN_ERRORS:
      return [];
    default:
      return oldState;
  }
};

export default ErrorsReducer;
