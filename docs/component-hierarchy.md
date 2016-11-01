## Component Hierarchy

**AuthFormContainer**
 - AuthForm

**AppComponent**
 - NavBar (logged out)
   + Foodiegogo (link to HomeContainer)
   + Log In  (link to AuthFormContainer)
   + Sign Up (link to AuthFormContainer)
 - NavBar (logged in)
   + Foodiegogo (link to HomeContainer)
   + New Project (link to NewProjectContainer)
   + Log Out  (link to AuthFormContainer)

**HomeComponent**
 - CampaignIndexContainer
  + CampaignIndexItemContainer

**CampaignDetailContainer**
 - PerkIndexContainer
  + PerkIndexItemContainer
 - CampaignContributionIndexContainer

**NewCampaignContainer**
  - CampaignFormComponent

**ProfileComponent**
 - UserCampaignsContainer
 - UserContributionsContainer



## Routes

|Path   | Component   |
|-------|-------------|
| "/" | "AppComponent" |
| "/sign-up" | "AuthFormContainer" |
| "/sign-in" | "AuthFormContainer" |
| "/home" | "HomeComponent" |
| "/campaigns/:campaignId" | "CampaignDetailContainer" |
| "/new-campaign" | "NewCampaignContainer" |
| "/profiles/:profileId" | "ProfileComponent" |
