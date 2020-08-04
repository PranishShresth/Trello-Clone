import { USER } from "../constants";

const initialState = {
  user: {},
  isLoggedIn: false,
  isLoading: true,
  error: "",
};
export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER.LOGIN_USER_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        isLoading: false,
        user: action.payload,
      };
    case USER.LOGIN_USER_ERROR:
      const error = action.payload;
      return { ...state, error };
    case USER.LOGOUT_USER:
      localStorage.removeItem("jwt-Token");
      return { ...state, user: {}, isLoggedIn: false };

    default:
      return state;
  }
};

export default { loginReducer };
