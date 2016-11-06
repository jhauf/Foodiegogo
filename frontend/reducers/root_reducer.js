import {combineReducers} from 'redux';

import SessionReducer from './session_reducer';
import CampaignsReducer from './campaigns_reducer';
import ErrorsReducer from './errors_reducer';
import PerksReducer from './perks_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  campaigns: CampaignsReducer,
  errors: ErrorsReducer,
  perks: PerksReducer
});

export default RootReducer;
