import React from "react";
import "./App.css";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Registration from "./pages/Registration";
import MainPage from "./pages/MainPage";
import Boards from "./pages/Boards";
import Header from "./components/Header/Header";
function App() {
  return (
    <Switch>
      <Route exact path="/" render={() => <Registration />} />
      <>
        <Header />

        <Route exact path="/home/:user" render={() => <MainPage />} />
        <Route exact path="/boards/:boardName" render={() => <Boards />} />
      </>
    </Switch>
  );
}

export default App;
