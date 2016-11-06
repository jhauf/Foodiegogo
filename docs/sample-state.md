```js

{
  session: {
    currentUser: {
      id: 1,
      username: "janehauf"
    },
    errors: []
  },
  profile: {
    1: {
      fname: "Jane",
      lname: "Hauf",
      description: “Just a NorCal girl who loves food”,
      picture_url: “my_picture.jpg”
   }
  },
  campaigns: {
    1: {
      name: "Monty’s Deli",
      description: " An authentic Jewish delicatessen open seven days a week.",
      goal: 60000,
      current_amt: 32000,
      campaigner_id: 1,
      picture_url: "sandwich.jpg",
      contributions: {
        1: {
          date: 7/12/16,
          amount: 20,
          contributor_id: 2
        }
      },
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
  errors: []
}

```
