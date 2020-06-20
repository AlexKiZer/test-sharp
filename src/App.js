import React, { Component } from "react";
import { withRouter, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { Alert } from "@material-ui/lab";

import { history } from "./store/configureStore";
import { routing } from "./constants";
import { alertActions } from "./actions/";

import Main from "./views/Main";
import Registration from "./views/Registration";
import Transaction from "./views/Transaction";
import Header from "./containers/Header";

import "./App.css";

const routes = [
  {
    path: routing.main,
    exact: true,
    Component: Main,
  },
  {
    path: routing.registration,
    Component: Registration,
  },
  {
    path: routing.transaction,
    Component: Transaction,
  },
];

class App extends Component {
  constructor(props) {
    super(props);

    history.listen((location, action) => {
      this.props.clearAlerts();
    });
  }

  render() {
    const { location } = history,
      { alert } = this.props;

    return (
      <div className="App">
        <Header />

        {alert.message && (
          <Alert className="alert" severity="error">
            {alert.message}
          </Alert>
        )}
        <Switch location={location}>
          {routes.map(({ path, Component, exact = false }) => (
            <Route
              key={path}
              exact={exact}
              path={path}
              component={(props) => <Component routePath={path} {...props} />}
            />
          ))}
        </Switch>
      </div>
    );
  }
}

function mapStateToProps({ alert }) {
  return { alert };
}

const actionCreators = {
  clearAlerts: alertActions.clear,
};

export default withRouter(connect(mapStateToProps, actionCreators)(App));
