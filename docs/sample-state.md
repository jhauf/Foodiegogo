```js
Component Hierarchy
AuthFormContainer
•	AuthForm

NavBar (logged out)
•	Foodiegogo (link to HomeContainer)
•	Log In  (link to AuthFormContainer)
•	Sign Up (link to AuthFormContainer)

NavBar (logged in)
•	Foodiegogo (link to HomeContainer)
•	New Project (link to NewProjectContainer)
•	Log Out  (link to AuthFormContainer)

HomeContainer
•	Home
•	Navbar
•	Campaign Index Container
◦	Campaign Index Items

CampaignDetailContainer
•	NavBar
•	Perk Index
◦	PerkIndexItems
•	CampaignContributionsComponent

Profile Container
•	NavBar
•	UserCampaignsComponent
•	UserContributionsComponent

New Campaign Container
•	NavBar
•	Campaign Form















{
  currentUser: {
    id: 1,
    username: "janehauf"
    picture_url: “my_picture.jpg”,
    description: “Just a NorCal girl who loves food”
  },
  forms: {
    signUp: {errors: []},
    logIn: {errors: []},
    createNewCampaign: {errors: []}
  },
  campaigns: {
    1: {
      name: "Monty’s Deli",
      description: " An authentic Jewish delicatessen open seven days a week, where traditional recipes are made expertly in house with great love and care.",
      goal: 60000,
      current_amt: 32000,
      campaigner_id: 1,
      picture_url: "sandwich.jpg",
      perks: {
1: {
  name: “T-shirt” ,
  amount: $20,
  campaign_id: 1,
  contribution_id: 1,
  picture_url: “shirt.jpg”
}
      },
    }
  },
  contributions: {
    1: {
      date: 7/12/16,
      amount: $20,
      author_id: 1,
      campaign_id: 1,
      contributor_id: 1
    }
  }
}

```
