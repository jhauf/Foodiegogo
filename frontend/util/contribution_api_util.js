export const createContribution = (contribution, success) => {
  $.ajax({
    url: "api/contributions/",
    type: "POST",
    data: { contribution },
    success
  });
};


export const fetchContribution = (id, success) => {
  $.ajax({
    url: `api/contributions/${id}`,
    success
  });
};

export const fetchContributions = (id, success) => {
  $.ajax({
    url: `api/campaigns/${id}/contributions`,
    success
  });
};
