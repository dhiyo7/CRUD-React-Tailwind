import React from "react";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

import LoginComponent from "../components/Login";

const Login = () => {
  const isLogin = useSelector((state) => state.auth.isLogin);
  console.log("token", isLogin);
  if (isLogin === true) return <Redirect to="/addon" />;

  return <LoginComponent/>;
};

export default Login;
