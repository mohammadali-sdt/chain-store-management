export const addEmployee = async (url, data) => {
  try {
    const res = await axios({
      method: "POST",
      url,
      data,
    });
    if (res.data.status === "success") {
      alert("Employee added successfully!");
    }
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
    if (res.data.status === "success") {
      alert("Employee deleted successfully!");
    }
  } catch (err) {
    console.log(err.response.data.message);
  }
};

export const updateEmployee = async function (id, data, url) {
  try {
    const res = await axios({
      method: "PATCH",
      url: `${url}/${id}`,
      data,
    });

    if (res.data.status === "success") {
      alert("Employee Updated Successfully");
    }
  } catch (err) {
    console.log(err.response.data.message);
  }
};
