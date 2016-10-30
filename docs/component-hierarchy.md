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
 - Navbar
 - CampaignIndexContainer
  + CampaignIndexItems

**CampaignDetailContainer**
 - Navbar
 - PerkIndex
  + PerkIndexItems
  * CampaignContributionsComponent

**NewCampaignContainer**
   - NavBar
   - CampaignForm
   
**ProfileContainer**
 - NavBar
 - UserCampaignsComponent
 - UserContributionsComponent



## Routes

|Path   | Component   |
|-------|-------------|
| "/sign-up" | "AuthFormContainer" |
| "/sign-in" | "AuthFormContainer" |
| "/home" | "HomeContainer" |
| "/home/campaigns" | "CampaignIndexContainer"
| "/campaigns/:campaignId" | "CampaignDetailContainer" |
| "/new-campaign" | "NewCampaignContainer" |
| "/user/:userId" | "ProfileContainer" |
