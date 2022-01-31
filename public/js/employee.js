export const addEmployee = async (url, data) => {
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

export const deleteEmployee = async function (id) {
  try {
    const res = await axios({
      method: "DELETE",
      url: `/api/v1/employee/${id}`,
    });
  } catch (err) {
    console.log(err.response.data.message);
  }
};
