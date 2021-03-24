import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import PrivateRouter from "../src/util/PrivateRoute"

import Login from "../src/pages/Login"
import AddOns from "../src/pages/AddOns"
import AddOnByID from "../src/pages/AddOnByID"
import EditAdons from "../src/pages/EditAdons"
import Category from "../src/pages/Category"


function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Login} />
      <PrivateRouter path="/addon" component={AddOns} />
      <PrivateRouter path="/view/:id" component={AddOnByID} />
      <PrivateRouter path="/edit-addon/:id" component={EditAdons} />
      <PrivateRouter path="/category" component={Category}/>
    </BrowserRouter>
  );
}

export default App;
