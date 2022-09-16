import React from "react";
import {Route, Routes} from "react-router-dom";
import Dish from "../component/dishes/dishes";
import Login from "../Pages/login";
function RouterDom() {
  return (
    <Routes>
        <Route exact path="/" component={Login} />
        {/* <Route exact path="/pollResult" component={} /> */}
        <Route exact path="/dishes" component={Dish} />
    </Routes>
  );
}
export default RouterDom;
