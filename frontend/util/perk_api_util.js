
export const createPerk = (perk, success, error) => {
  $.ajax({
    url: `api/perks`,
    type: "POST",
    data: { perk },
    success,
    error
  });
};

export const fetchPerks = (id, success) => {
  $.ajax({
    url: `api/campaigns/${id}/perks`,
    type: "GET",
    success
  });
};

export const updatePerk = (perk, success, error) => {
  $.ajax({
    url: `api/perks/${perk.id}`,
    type: "PATCH",
    data: { perk },
    success,
    error
  });
};
