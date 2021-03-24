import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import PrivateRouter from "../src/util/PrivateRoute"

import Login from "../src/pages/Login"
import AddOns from "../src/pages/AddOns/AddOns"
import AddOnByID from "../src/pages/AddOns/AddOnByID"
import NewAddOn from "../src/pages/AddOns/NewAddOn"
import EditAdons from "../src/pages/AddOns/EditAdons"
import Category from "./pages/Category/Category"
import AddCategory from "./pages/Category/NewCategory"
import ViewCategory from "./pages/Category/CategoryByID"
import EditCategory from "./pages/Category/EditCategory"


function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Login} />
      <PrivateRouter path="/addon" component={AddOns} />
      <PrivateRouter path="/add" component={NewAddOn} />
      <PrivateRouter path="/view/:id" component={AddOnByID} />
      <PrivateRouter path="/edit-addon/:id" component={EditAdons} />
      <PrivateRouter path="/category" component={Category}/>
      <PrivateRouter path="/addcategory" component={AddCategory}/>
      <PrivateRouter path="/viewcategory/:id" component={ViewCategory}/>
      <PrivateRouter path="/editcategory/:id" component={EditCategory}/>
    </BrowserRouter>
  );
}

export default App;
