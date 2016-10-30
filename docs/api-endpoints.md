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


### Profiles
- `GET /api/profiles/:id`
- `PATCH /api/profiles/:id`


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
