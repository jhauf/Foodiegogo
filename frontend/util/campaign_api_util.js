
export const fetchCampaigns = success => {
  $.ajax({
    url: "api/campaigns",
    success
  });
};

export const fetchCampaign = (id, success) => {
  $.ajax({
    url: `api/campaigns/${id}`,
    success
  });
};

export const createCampaign = (campaign, success) => {
  $.ajax({
    url: "api/campaigns",
    type: "POST",
    data: { campaign },
    success
  });
};

export const updateCampaign = (campaign, success) => {
  $.ajax({
    url: `api/campaigns/${campaign.id}`,
    type: "PATCH",
    data: { campaign },
    success
  });
};

export const deleteCampaign = (id, success) => {
  $.ajax({
    url: `api/campaigns/${id}`,
    type: "DELETE",
    success
  });
};
