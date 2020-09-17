import React, { useEffect, useState } from "react";
import "./App.css";
import { Switch, Route, BrowserRouter, useHistory } from "react-router-dom";
import Registration from "./pages/Registration";
import AppContainer from "./components/AppContainer";
import MainPage from "./pages/MainPage";
import { fetchCurrentUser, LogOutUser } from "./actions/index";
import page404 from "./components/page404";
import Boards from "./pages/Boards";
import Profile from "./pages/Profile";
import { connect } from "react-redux";
import PrivateRoute from "./components/PrivateRoute";
import { getCurrentUser } from "./utils/api";
import { isTokenExpired } from "./utils/jwt";

import Header from "./components/Header/Header";

function App({ currentUser, fetchCurrentUser, logOut }) {
  const history = useHistory();

  useEffect(() => {
    const jwt = localStorage.getItem("jwt-token");
    if (jwt) {
      if (isTokenExpired(jwt)) {
        logOut();
      } else {
        fetchCurrentUser();
      }
    }
  }, []);
  return (
    <Switch>
      <Route exact path="/" component={Registration} />
      <Route exact path="/home/:user" component={MainPage} />
      <Route exact path="/boards/:boardName" component={Boards} />
      <Route path="/profile" component={Profile} />
      <Route component={page404} />
    </Switch>
  );
}

const MapDispatchToProps = (dispatch) => ({
  fetchCurrentUser: () => dispatch(fetchCurrentUser()),
  logOut: () => dispatch(LogOutUser()),
});
const mapStateToProps = ({ login }) => ({
  currentUser: login,
});
export default connect(mapStateToProps, MapDispatchToProps)(App);
