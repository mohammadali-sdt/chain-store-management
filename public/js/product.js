export const addProduct = async (url, data) => {
  try {
    const res = await axios({
      method: "POST",
      url,
      data,
    });
  } catch (err) {
    console.log(err.response.data.message);
  }
};

export const deleteProduct = async (id) => {
  try {
    const res = await axios({
      method: "DELETE",
      url: `/api/v1/product/${id}`,
    });
  } catch (err) {
    console.log(err.response.data.message);
  }
};
