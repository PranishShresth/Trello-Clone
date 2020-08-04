import React from "react";
import { Route, Redirect } from "react-router-dom";

function PrivateRoute({ component: Component, isLoggedIn, ...props }) {
  return (
    <Route
      {...props}
      render={(props) =>
        isLoggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        )
      }
    ></Route>
  );
}

export default PrivateRoute;
