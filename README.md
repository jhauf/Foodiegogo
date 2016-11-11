# Foodiegogo

Foodiegogo [live][heroku]

[heroku]: http://www.foodiegogo.co

Foodiegogo is a full-stack web application inspired by Indiegogo.  It utilizes Ruby on Rails on the backend, a PostgreSQL database, and React.js with a Redux architectural framework on the frontend.

## Features & Implementation


### Campaigns
  On the database side, the campaigns are stored in one table in the database. campaigns are rendered in two different components: the Campaign Index as well as the Campaign Show page. The Campaign's Index renders the pictures, titles and descriptions of all the campaigns. The Campaign Show page features a video, days left, current funding, goal funding, as well a Contributions Index Component which renders a list of Contribution Index Items.


### Perks
  Each campaign has a number of perks which users received when they contribute a pre-specified amount. Clicking on a perk opens the contributions form which on submit creates a new contribution.


### Contributions
  Contributions are stored in the database with a contribution table which contains the columns id, date, donation amount, campaign_id, contributor_id, perk_id. Each campaign's page displays a list of contributions, with the date, donation amount and contributor's name. Each time a contribution is made by clicking the perk, it updates the current funding of the campaign and adds an entry to the contributions table.

### Search
  Searching by campaign name is another feature of which re-queries the database with each keystroke.

### Categories
  My app allows users to filter campaigns by categories.

### Categories

## Future Directions for the Project

In addition to the features already implemented, I plan on adding the following features to the project.

### Profiles
  Each user will have a profile which will display their basic information, profile picture, the campaigns they have started as well as the campaigns they have contributed to.

### Google Maps API
  For the restaurants, I plan to integrate my app with Google Maps to allow users to search for restaurants in their area.
