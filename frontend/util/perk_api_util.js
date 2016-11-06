
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

export const updatePerk = (perk, success) => {
  debugger
  $.ajax({
    url: `api/perks/${perk.id}`,
    type: "PATCH",
    data: { perk },
    success
  });
};
