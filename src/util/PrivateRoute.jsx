import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ component: Component, auth, ...rest }) => {
  const token = useSelector((state) => state.auth.data.access_token);
  return (
    // Show the component only when the user is logged in
    // Otherwise, redirect the user to login page
    <Route
      {...rest}
      render={(props) =>
        token === null ? <Redirect to="/" /> : <Component {...props} />
      }
    />
  );
};

export default PrivateRoute;
