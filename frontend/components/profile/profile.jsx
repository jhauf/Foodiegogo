import React from 'react';


const Profile = ({currentUser}) => {
    return (
    <div className="profileTable">
      <h1>{currentUser.fname} {currentUser.lname}</h1>
    <ul className="userCampaigns">
      <h2>My Campaigns</h2>
      {
        currentUser.campaigns.map(campaign => (
          <li key={campaign.id} className="userCampaignItems">{campaign.name}</li>
        ))}
    </ul>
    <ul className="userContributions">
      <h2>My Perks</h2>
      {
        currentUser.perks.map(perk => (
          <li key={perk.id} className="userContributionItems">{perk.name}</li>
        ))}
    </ul>
  </div>);
};

export default Profile;
