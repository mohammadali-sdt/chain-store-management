export const addStock = async function (data) {
  try {
    const res = await axios({
      method: "POST",
      url: "/api/v1/stock/",
      data,
    });
    if (res.data.status === "success") {
      alert("Stock added successfully!");
    }
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
    if (res.data.status === "success") {
      alert("Stock deleted successfully!");
    }
  } catch (err) {
    console.log(err.response.data.message);
  }
};

export const updateStock = async function (id, data) {
  try {
    const res = await axios({
      method: "PATCH",
      url: `/api/v1/stock/${id}`,
      data,
    });

    if (res.data.status === "success") {
      alert("Stock Updated Successfully");
    }
  } catch (err) {
    console.log(err.response.data.message);
  }
};
