# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `POST /api/users`
- `PATCH /api/users`

### Session

- `POST /api/session`
- `DELETE /api/session`
- `GET /api/session`


### Profile
- `GET /api/users/:id`
- `PATCH /api/users/:id`


### Campaigns

- `GET /api/campaigns`
- `POST /api/campaigns`
- `GET /api/campaigns/:id`
- `GET /api/users/:id/campaigns`
  - get all the campaigns for a user

### Contributions

- `GET /api/campaigns/:id/contributions`
  - all contributions for a campaign
- `GET /api/users/:id/contributions`
  - all contributions for a user

### Perks

- `GET /api/campaigns/:id/perks`
  - all perks for a campaign
