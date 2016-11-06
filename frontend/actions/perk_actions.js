export const CREATE_PERK = "CREATE_PERK";
export const RECEIVE_PERK = "RECEIVE_PERK";

export const createPerk = perk => ({
  type: CREATE_PERK,
  perk
});

export const receivePerk = perk => ({
  type: RECEIVE_PERK,
  perk
})
