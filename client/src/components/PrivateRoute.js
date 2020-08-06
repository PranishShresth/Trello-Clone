import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

function PrivateRoute({ component: Component, isLoggedIn, ...props }) {
  return (
    <Route
      {...props}
      render={(props) =>
        isLoggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: `/`, state: { from: props.location } }} />
        )
      }
    ></Route>
  );
}

const mapStateToProps = ({ login: { isLoggedIn } }) => ({
  isLoggedIn,
});

export default connect(mapStateToProps, null)(PrivateRoute);
