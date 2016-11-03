import {combineReducers} from 'redux';

import SessionReducer from './session_reducer';
import CampaignsReducer from './campaigns_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  campaigns: CampaignsReducer
});

export default RootReducer;
