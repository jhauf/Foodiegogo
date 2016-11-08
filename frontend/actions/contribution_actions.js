export const RECEIVE_CONTRIBUTION = "RECEIVE_CONTRIBUTION";
export const CREATE_CONTRIBUTION = "CREATE_CONTRIBUTION";

export const createContribution = contribution => ({
  type: CREATE_CONTRIBUTION,
  contribution
});

export const receiveContribution = contribution => ({
  type: RECEIVE_CONTRIBUTION,
  contribution
});
