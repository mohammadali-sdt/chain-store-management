export const addStock = async function (data) {
  const res = await axios({
    method: "POST",
    url: "/api/v1/stock/",
    data,
  });
};
