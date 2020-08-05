import { loginReducer } from "./userReducer";
import { combineReducers } from "redux";
import { boardsReducer } from "./boardsReducer";
import { connectRouter } from "connected-react-router";

const rootReducer = (history) =>
  combineReducers({
    login: loginReducer,
    router: connectRouter(history),
    boards: boardsReducer,
  });

export default rootReducer;
