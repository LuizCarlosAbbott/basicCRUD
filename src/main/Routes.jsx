import React from "react";
import { Switch, Route, Redirect } from "react-router";

import Home from "../components/home/Home";
import UserCrud from "../components/user/UserCrud";

export default props => (
  <Switch>
    <Route path="/basicCRUD/users" component={UserCrud} />
    <Route exact patch="/basicCRUD" component={Home} />
    <Redirect from="*" to="/basicCRUD" />
  </Switch>
);
