import { applyMiddleware } from 'redux';

import SessionMiddleware from '../middleware/session_middleware';
import CampaignsMiddleware from '../middleware/campaigns_middleware';


const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  CampaignsMiddleware
);

export default RootMiddleware;
