import { applyMiddleware } from 'redux';

import SessionMiddleware from '../middleware/session_middleware';
import CampaignsMiddleware from '../middleware/campaigns_middleware';
import PerksMiddleware from '../middleware/perks_middleware';
import ContributionsMiddleware from '../middleware/contributions_middleware';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  CampaignsMiddleware,
  PerksMiddleware,
  ContributionsMiddleware
);

export default RootMiddleware;
