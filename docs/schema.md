# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
picture_url     | string    |
description     | text      |
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## campaigns
column name    | data type | details
---------------|-----------|-----------------------
id             | integer   | not null, primary key
name           | string    | not null, indexed, unique
goal_amt       | integer   | not null
current_amt    | integer   | not null
description    | text      | not null
end_date       | text      | not null
picture_url    | string    | not null
campaigner_id  | integer   | not null, foreign key (references users), indexed


## contributions
column name     | data type | details
--------------  |-----------|-----------------------
id              | integer   | not null, primary key
date            | date      | not null
donation_amt    | integer   | not null
campaign_id     | integer   | not null, foreign key (references campaigns), indexed
contributor_id  | integer   | not null, foreign key (references users), indexed


## perks
column name     | data type | details
--------------  |-----------|-----------------------
id              | integer   | not null, primary key
name            | integer   | not null
donation_amt    | string    | not null
picture_url     | string    |
campaign_id     | integer   | not null, foreign key (references campaigns), indexed
contribution_id | integer   | not null, foreign key (references contributions), indexed

## categories
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null

## taggings
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
campaign_id | integer   | not null, foreign key (references campaign), indexed, unique [category_id]
category_id | integer   | not null, foreign key (references categories), indexed
