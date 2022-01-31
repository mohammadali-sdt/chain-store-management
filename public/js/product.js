export const addProduct = async (url, data) => {
  try {
    const res = await axios({
      method: "POST",
      url,
      data,
    });
    if (res.data.status === "success") {
      alert("Product added successfully!");
    }
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
    if (res.data.status === "success") {
      alert("Product deleted successfully!");
    }
  } catch (err) {
    console.log(err.response.data.message);
  }
};

export const updateProduct = async (id, data, url) => {
  try {
    const res = await axios({
      method: "PATCH",
      url: `${url}/${id}`,
      data,
    });
    if (res.data.status === "success") {
      alert("Product updaetd successfully!");
    }
  } catch (err) {
    console.log(err.response.data.message);
  }
};
