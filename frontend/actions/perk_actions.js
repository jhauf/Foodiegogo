export const CREATE_PERKS = "CREATE_PERKS";

export const createPerks = perks => ({
  type: CREATE_PERKS,
  perks
});

export const receivePerks = perks => ({
  type: RECEIVE_PERKS,
  perks
})
