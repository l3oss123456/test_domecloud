import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Menubar from "./menuBar";
import Home from "../../containers/home/index";
import Covid19VaccineRegister from "../../containers/Covid19VaccineRegister/index";

const _Home = () => (
  <Menubar>
    <Home />
  </Menubar>
);

const _Covid19VaccineRegister = () => (
  <Menubar>
    <Covid19VaccineRegister />
  </Menubar>
);

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={_Home} />
        <Route
          exact
          path="/vaccineRegister"
          component={_Covid19VaccineRegister}
        />
      </Switch>
    </Router>
  );
};
export default Routes;
