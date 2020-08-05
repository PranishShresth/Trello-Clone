import { USER } from "../constants";

const initialState = {
  user: {},
  isLoggedIn: false,
  isLoading: true,
  error: "",
};
export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER.LOGIN_USER:
      return Object.assign({}, state, {
        ...state,
      });
    case USER.LOGIN_USER_SUCCESS:
      return Object.assign({}, state, {
        ...state,
        isLoggedIn: true,
        isLoading: false,
        user: action.payload,
      });
    case USER.LOGIN_USER_ERROR:
      return Object.assign({}, state, {
        ...state,
        error: "LOGIN ERROR",
      });
    case USER.LOGOUT_USER:
      localStorage.removeItem("jwt-token");
      return Object.assign({}, state, {
        ...state,
        user: {},
        isLoggedIn: false,
      });

    default:
      return state;
  }
};

export default { loginReducer };
