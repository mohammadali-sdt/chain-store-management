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
