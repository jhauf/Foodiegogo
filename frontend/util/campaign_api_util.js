
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

export const createCampaign = (campaign, success, error) => {
  $.ajax({
    url: "api/campaigns",
    type: "POST",
    data: { campaign },
    success,
    error
  });
};

export const updateCampaign = (campaign, success, error) => {
  $.ajax({
    url: `api/campaigns/${campaign.id}`,
    type: "PATCH",
    data: { campaign },
    success,
    error
  });
};

export const deleteCampaign = (id, success) => {
  $.ajax({
    url: `api/campaigns/${id}`,
    type: "DELETE",
    success
  });
};
