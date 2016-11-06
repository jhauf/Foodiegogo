import { applyMiddleware } from 'redux';

import SessionMiddleware from '../middleware/session_middleware';
import CampaignsMiddleware from '../middleware/campaigns_middleware';
import PerksMiddleware from '../middleware/perks_middleware';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  CampaignsMiddleware,
  PerksMiddleware
);

export default RootMiddleware;
