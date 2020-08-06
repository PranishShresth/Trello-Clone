import React, { useEffect, useState } from "react";
import "./App.css";
import { Switch, Route, BrowserRouter, useHistory } from "react-router-dom";
import Registration from "./pages/Registration";
import AppContainer from "./components/AppContainer";
import MainPage from "./pages/MainPage";
import { fetchCurrentUser } from "./actions/index";
import Boards from "./pages/Boards";
import { connect } from "react-redux";
import PrivateRoute from "./components/PrivateRoute";
import { getCurrentUser } from "./utils/api";
import Header from "./components/Header/Header";

function App({ currentUser, fetchCurrentUser }) {
  const history = useHistory();

  useEffect(() => {
    const jwt = localStorage.getItem("jwt-token");
    if (jwt) {
      fetchCurrentUser();
    }
    console.log(currentUser);
  }, []);
  return (
    <Switch>
      <Route exact path="/" render={() => <Registration />} />

      <PrivateRoute path="/home/:user" component={MainPage} />
      <PrivateRoute path="/boards/:boardName" component={Boards} />
    </Switch>
  );
}

const MapDispatchToProps = (dispatch) => ({
  fetchCurrentUser: () => dispatch(fetchCurrentUser()),
});
const mapStateToProps = ({ login, router }) => ({
  currentUser: login,
  location: router.location.pathname,
});
export default connect(mapStateToProps, MapDispatchToProps)(App);
