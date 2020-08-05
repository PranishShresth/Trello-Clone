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

function App({ setCurrentUser, currentUser, location, fetchCurrentUser }) {
  const history = useHistory();
  // async function persistLogin() {
  //   const {
  //     data: { user },
  //     status,
  //   } = await getCurrentUser();
  //   if (status === 200) {
  //     await setCurrentUser(user);
  //   }
  // }

  // useEffect(() => {
  //   const jwt = localStorage.getItem("jwt-token");
  //   if (jwt) {
  //     fetchCurrentUser();
  //     history.push(`home/${currentUser.user.name}`);
  //   }
  //   console.log(currentUser);
  // }, []);
  return (
    <Switch>
      <Route exact path="/" render={() => <Registration />} />

      <AppContainer>
        <Route path="/home/:user" component={MainPage} />
        <Route path="/boards/:boardName" component={Boards} />
      </AppContainer>
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
