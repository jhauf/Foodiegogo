export const CREATE_PERK = "CREATE_PERK";
export const RECEIVE_PERK = "RECEIVE_PERK";
export const FETCH_PERKS = "FETCH_PERKS";
export const FETCH_PERK = "FETCH_PERK";
export const RECEIVE_PERKS = "RECEIVE_PERKS";
export const UPDATE_PERK = "UPDATE_PERK";
export const RECEIVE_PERK_ERRORS = "RECEIVE_PERK_ERRORS";

export const createPerk = perk => ({
  type: CREATE_PERK,
  perk
});

export const receivePerks = perks => ({
  type: RECEIVE_PERKS,
  perks
});

export const receivePerk = perk => ({
  type: RECEIVE_PERK,
  perk
});

export const fetchPerks = id => ({
  type: FETCH_PERKS,
  id
});

export const fetchPerk = id => ({
  type: FETCH_PERK,
  id
});

export const updatePerk = perk => ({
  type: UPDATE_PERK,
  perk
});

export const receivePerkErrors = errors => ({
  type: RECEIVE_PERK_ERRORS,
  errors
});
