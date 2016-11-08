export const RECEIVE_CONTRIBUTION = "RECEIVE_CONTRIBUTION";
export const CREATE_CONTRIBUTION = "CREATE_CONTRIBUTION";
export const FETCH_CONTRIBUTIONS = "FETCH_CONTRIBUTIONS";
export const RECEIVE_CONTRIBUTIONS = "RECEIVE_CONTRIBUTIONS";

export const createContribution = contribution => ({
  type: CREATE_CONTRIBUTION,
  contribution
});

export const receiveContribution = contribution => ({
  type: RECEIVE_CONTRIBUTION,
  contribution
});

export const receiveContributions = contributions => ({
  type: RECEIVE_CONTRIBUTIONS,
  contributions
});


export const fetchContributions = id => ({
  type: FETCH_CONTRIBUTIONS,
  id
});
