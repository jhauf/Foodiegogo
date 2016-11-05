export const FETCH_CAMPAIGNS = "FETCH_CAMPAIGNS";
export const FETCH_CAMPAIGN = "FETCH_CAMPAIGN";
export const RECEIVE_ALL_CAMPAIGNS = "RECEIVE_ALL_CAMPAIGNS";
export const RECEIVE_CAMPAIGN = "RECEIVE_CAMPAIGN";
export const CREATE_CAMPAIGN = "CREATE_CAMPAIGN";
export const UPDATE_CAMPAIGN = "UPDATE_CAMPAIGN";
export const DELETE_CAMPAIGN = "DELETE_CAMPAIGN";
export const REMOVE_CAMPAIGN = "REMOVE_CAMPAIGN";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";


export const fetchCampaigns = () => ({
  type: FETCH_CAMPAIGNS
});

export const fetchCampaign = id => ({
  type: FETCH_CAMPAIGN,
  id
});

export const createCampaign = campaign => ({
  type: CREATE_CAMPAIGN,
  campaign
});

export const updateCampaign = campaign => ({
  type: UPDATE_CAMPAIGN,
  campaign
});

export const deleteCampaign = id => ({
  type: DELETE_CAMPAIGN,
  id
});

export const receiveAllCampaigns = campaigns => ({
  type: RECEIVE_ALL_CAMPAIGNS,
  campaigns
});

export const receiveCampaign = campaign => ({
  type: RECEIVE_CAMPAIGN,
  campaign
});

export const removeCampaign = campaign => ({
  type: REMOVE_CAMPAIGN,
  campaign
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});
