import React from 'react';
import { BrowserRouter as Router,Route, Switch } from 'react-router-dom';
import Login from '../Login/LoginPage';
import DashboardLayout from '../../components/DashboardLayout/DashboardLayout';
import Routes from './Routes';
import ReduxManagedSpinner from '../../components/ReduxManagedSpinner/ReduxManagedSpinner';

const App = () => {

    return (
        <>
          <ReduxManagedSpinner/>
          <Router>
            <Switch>
              <Route exact path="/login" component={Login} />
              <Route path="/">
                <DashboardLayout>
                  <Routes/>
                </DashboardLayout>
              </Route>
            </Switch>
          </Router>
        </>
    );
}

export default App;
