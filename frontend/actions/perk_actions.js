export const CREATE_PERK = "CREATE_PERK";
export const RECEIVE_PERK = "RECEIVE_PERK";
export const FETCH_PERKS = "FETCH_PERKS";
export const RECEIVE_PERKS = "RECEIVE_PERKS";
export const UPDATE_PERK = "UPDATE_PERK";

export const createPerk = perk => ({
  type: CREATE_PERK,
  perk
});

export const receivePerks = perks => ({
  type: RECEIVE_PERKS,
  perks
})

export const receivePerk = perk => ({
  type: RECEIVE_PERK,
  perk
})

export const fetchPerks = () => ({
  type: FETCH_PERKS
})

export const updatePerk = perk => ({
  type: UPDATE_PERK,
  perk
})
