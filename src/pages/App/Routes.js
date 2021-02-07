import React from "react";
import { Switch, Route } from "react-router-dom";
import LogoutPage from "../Login/LogoutPage";
import Calendar from '../../pages/Appointments/Calendar';
const Routes = props => (
  <Switch>
    <Route exact path="/logout" component={LogoutPage} />
    <Route exact path="/" component={Calendar} />
  </Switch>
);
export default Routes;