export const RECEIVE_CATEGORY = "RECEIVE_CATEGORY";
export const BAKED_GOODS = "BAKED_GOODS";
export const RESTAURANT = "RESTAURANT";
export const ALCOHOLIC = "ALCOHOLIC";
export const FOR_THE_HOME = "FOR_THE_HOME";
export const PHILANTHROPY = "PHILANTHROPY";



export const receiveCategory = category => ({
  type: RECEIVE_CATEGORY,
  category
});
