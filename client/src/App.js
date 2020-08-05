import React, { useEffect, useState } from "react";
import "./App.css";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Registration from "./pages/Registration";
import MainPage from "./pages/MainPage";
import { setUser } from "./actions/index";
import Boards from "./pages/Boards";
import { connect } from "react-redux";
import PrivateRoute from "./components/PrivateRoute";
import { getCurrentUser } from "./utils/api";
import Header from "./components/Header/Header";

function App({ setCurrentUser, currentUser, location }) {
  async function persistLogin() {
    const {
      data: { user },
      status,
    } = await getCurrentUser();
    if (status === 200) {
      await setCurrentUser(user);
    }
  }
  useEffect(() => {
    persistLogin();
  }, []);
  return (
    <Switch>
      <Route exact path="/" render={() => <Registration />} />
      <>
        <PrivateRoute exact path="/home/:user" component={MainPage} />
        <PrivateRoute exact path="/boards/:boardName" component={Boards} />
      </>
    </Switch>
  );
}

const MapDispatchToProps = (dispatch) => ({
  setCurrentUser: (payload) => dispatch(setUser(payload)),
});
const mapStateToProps = ({ login, router }) => ({
  currentUser: login,
  location: router.location.pathname,
});
export default connect(mapStateToProps, MapDispatchToProps)(App);
