import {combineReducers} from 'redux';

import SessionReducer from './session_reducer';
import CampaignsReducer from './campaigns_reducer';
import ErrorsReducer from './errors_reducer';


const RootReducer = combineReducers({
  session: SessionReducer,
  campaigns: CampaignsReducer,
  errors: ErrorsReducer
});

export default RootReducer;
