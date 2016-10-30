## Component Hierarchy

**AuthFormContainer**
 - AuthForm

**NavBar (logged out)**
 - Foodiegogo (link to HomeContainer)
 - Log In  (link to AuthFormContainer)
 - Sign Up (link to AuthFormContainer)

**NavBar (logged in)**
 - Foodiegogo (link to HomeContainer)
 - New Project (link to NewProjectContainer)
 - Log Out  (link to AuthFormContainer)

**HomeContainer**
 - CampaignIndexContainer
  + CampaignIndexItems

**CampaignDetailContainer**
 - PerkIndex
  + PerkIndexItems
 - CampaignContributionsComponent

**NewCampaignContainer**
   - CampaignForm

**ProfileContainer**
 - UserCampaignsComponent
 - UserContributionsComponent



## Routes

|Path   | Component   |
|-------|-------------|
| "/" | "NavBar" |
| "/sign-up" | "AuthFormContainer" |
| "/sign-in" | "AuthFormContainer" |
| "/home" | "HomeContainer" |
| "/campaigns/:campaignId" | "CampaignDetailContainer" |
| "/new-campaign" | "NewCampaignContainer" |
| "/users/:userId" | "ProfileContainer" |
