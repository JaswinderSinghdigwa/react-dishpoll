import React from "react";
import {Route, Switch } from "react-router-dom";
import Dish from "../component/dishes/dishes";
import Result from "../component/result/result";
import SelectedDishes from "../component/slectedDishes/slectedDishes";
import Login from "../Pages/login";
function RouterDom() {
  return (
    <Switch>
      <Route exact path="/pollResult" component={Result} />
      <Route exact path="/selected-choices" component={SelectedDishes} />
      <Route path="/dishes" component={Dish} />
      <Route path="/" component={Login} />
    </Switch>
  );
}
export default RouterDom;
