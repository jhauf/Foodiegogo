
export const createPerk = (perk, success, error) => {
  $.ajax({
    url: `api/perks`,
    type: "POST",
    data: { perk },
    success,
    error
  });
};
