export const addStock = async function (data) {
  try {
    const res = await axios({
      method: "POST",
      url: "/api/v1/stock/",
      data,
    });
  } catch (err) {
    console.log(err.response.data.message);
  }
};

export const deleteStock = async function (id) {
  try {
    const res = await axios({
      method: "DELETE",
      url: `/api/v1/stock/${id}`,
    });
  } catch (err) {
    console.log(err.response.data.message);
  }
};
