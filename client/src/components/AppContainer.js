import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { fetchCurrentUser } from "./../actions/index";

function AppContainer({ currentUser, fetchCurrentUser, ...props }) {
  const history = useHistory();
  //   async function persistLogin() {
  //     const {
  //       data: { user },
  //       status,
  //     } = await getCurrentUser();
  //     if (status === 200) {
  //       await setCurrentUser(user);
  //     }
  //   }
  function isEmpty(obj) {
    for (var prop in obj) {
      if (obj.hasOwnProperty(prop)) return false;
    }

    return true;
  }
  const jwt = localStorage.getItem("jwt-token");

  useEffect(() => {
    if (!jwt) {
      history.push("/");
    } else {
      if (isEmpty(currentUser.user)) {
        fetchCurrentUser();
      }
    }
  }, [jwt]);
  return <>{props.children}</>;
}

const MapDispatchToProps = (dispatch) => ({
  fetchCurrentUser: () => dispatch(fetchCurrentUser()),
});
const mapStateToProps = ({ login, router }) => ({
  currentUser: login,
  location: router.location.pathname,
});
export default connect(mapStateToProps, MapDispatchToProps)(AppContainer);
