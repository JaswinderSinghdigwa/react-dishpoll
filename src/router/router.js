import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
function RouterDom() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={} />
        <Route exact path="/SignUp" component={} />
        <Route exact path="/Dashboard" component={} />
      </Switch>
    </BrowserRouter>
  );
}
export default RouterDom;
