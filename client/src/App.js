import React, { useState } from "react";
import "./App.css";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Registration from "./pages/Registration";
import MainPage from "./pages/MainPage";
import { setUser, LogOutUser } from "./actions/index";
import Boards from "./pages/Boards";
import { connect } from "react-redux";
import PrivateRoute from "./components/PrivateRoute";
import { getCurrentUser } from "./utils/api";
import Header from "./components/Header/Header";

function App({ setCurrentUser, isLoggedIn, LogOutUser, login }) {
  useState(async () => {
    const { user } = await getCurrentUser();
    setCurrentUser(user);
  }, []);
  return (
    <Switch>
      <Route exact path="/" render={() => <Registration />} />
      <>
        <Header logOut={LogOutUser} />

        <PrivateRoute
          exact
          path="/home/:user"
          isLoggedIn
          component={MainPage}
        />
        <Route exact path="/boards/:boardName" isLoggedIn component={Boards} />
      </>
    </Switch>
  );
}

const MapDispatchToProps = (dispatch) => ({
  setCurrentUser: (payload) => dispatch(setUser(payload)),
  LogOutUser: () => dispatch(LogOutUser()),
});
const mapStateToProps = ({ login }) => ({
  isLoggedIn: login.isLoggedIn,
  login: login,
});
export default connect(mapStateToProps, MapDispatchToProps)(App);
