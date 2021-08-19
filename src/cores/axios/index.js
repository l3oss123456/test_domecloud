import axios from "axios";

const fetchData = async (method, pathUrl, body) => {
  try {
    const resp = await axios({
      method: method,
      url: pathUrl,
      data: body,
    });
    return resp;
  } catch (error) {
    return error;
  }
};
export default fetchData;
