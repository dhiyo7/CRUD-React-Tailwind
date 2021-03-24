import { authLogin } from "../../util/LoginHelper";
import actionAuth from "./actionAuth";

export const authLoginCreator = (email, password) => {
  return {
    type: actionAuth.authLogin,
    payload: authLogin(email, password),
  };
};
