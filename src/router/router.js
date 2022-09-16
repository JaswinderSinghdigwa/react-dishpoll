import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "../Pages/login";
function RouterDom() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/pollResult" component={} />
        <Route exact path="/dishes" component={} />
      </Switch>
    </BrowserRouter>
  );
}
export default RouterDom;
