
const CATEGORIES = {
  BAKED_GOODS: "baked_goods",
  RESTAURANT: "restaurant",
  ALCOHOLIC: "alcoholic_bev",
  FOR_THE_HOME: "for_the_home",
  PHILANTHROPY: "philanthropic"
};

export const filteredCampaigns = (state) => {
  const result = [];
  if (state.category) {
    Object.keys(state.campaigns).map((id) => {
        if (state.campaigns[id].category === CATEGORIES[state.category]) {
          result.push(state.campaigns[id]);
        }
    });
    return result;
  } else {
    return Object.keys(state.campaigns).map(id => state.campaigns[id]);
  }
};
