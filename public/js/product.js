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
  