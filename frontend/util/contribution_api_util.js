export const createContribution = (contribution, success) => {
  $.ajax({
    url: "api/contributions",
    type: "POST",
    data: { contribution },
    success
  });
};
