import { USER } from "../constants";

const initialState = {
  user: {},
  isLoading: true,
  error: "",
};
export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER.LOGIN_USER_SUCCESS:
      return { ...state, isLoading: false, user: action.payload };
    case USER.LOGIN_USER_ERROR:
      const error = action.payload;
      return { ...state, error };
    case USER.LOGOUT_USER:
      localStorage.removeItem("jwt-token");
      return { ...state, user: {} };

    default:
      return state;
  }
};

export default { loginReducer };
