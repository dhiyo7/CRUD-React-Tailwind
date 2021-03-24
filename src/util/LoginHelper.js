import Axios from "axios";
export const API = process.env.REACT_APP_URL;

export const authLogin = (email, password) => {
  const URI = `${API}/login`;
  return Axios.post(URI, { email: email, password: password });
};