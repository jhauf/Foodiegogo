
export const createPerk = (perk, success, error) => {
  $.ajax({
    url: `api/perks`,
    type: "POST",
    data: { perk },
    success,
    error
  });
};

export const fetchPerks = (success) => {
  $.ajax({
    url: `api/perks`,
    type: "GET",
    success
  });
};
