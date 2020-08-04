import { loginReducer } from "./userReducer";
import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

const rootReducer = (history) =>
  combineReducers({
    login: loginReducer,
    router: connectRouter(history),
  });

export default rootReducer;
