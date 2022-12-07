import axios from "axios";

export default axios.create({
  baseURL: "http://199.192.16.173:5000",
});

export const getAuthHeader = () => {
  const token = localStorage.getItem("token");

  if (token) {
    //axios.defaults.headers.common['Authorization'] = `JWT ${token}`;
    return { Authorization: `JWT ${token}` };
  } else {
    return {};
  }
};
