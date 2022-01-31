export const addBranch = async (data) => {
  try {
    const res = await axios({
      method: "POST",
      url: "/api/v1/branch/",
      data,
    });
  } catch (err) {
    console.log(err.response.data.message);
  }
};

export const deleteBranch = async (id) => {
  try {
    const res = await axios({
      method: "DELETE",
      url: `/api/v1/branch/${id}`,
    });
  } catch (err) {
    console.log(err.response.data.message);
  }
};
