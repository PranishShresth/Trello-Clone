import { USER, BOARDS } from "./../constants";
export const loginUser = (user) => ({
  type: USER.LOGIN_USER,
  payload: { ...user },
});
export const setUser = (user) => ({
  type: USER.LOGIN_USER_SUCCESS,
  payload: user,
});

export const setUserError = (error) => ({
  type: USER.LOGIN_USER_ERROR,
  payload: error,
});

export const fetchCurrentUser = () => ({
  type: USER.FETCH_CURRENT_USER,
});

// export const RegisterUser = (user) => ({
//   type: USER.REGISTER_USER,
//   payload: { ...user },
// });

// export const setRegisterSuccess = (bool) => ({
//   type: USER.REGISTER_USER_SUCCESS,
//   success: bool,
// });

// export const setRegisterError = (bool) => ({
//   type: USER.REGISTER_USER_ERROR,
//   error: bool,
// });

export const LogOutUser = () => ({
  type: USER.LOGOUT_USER,
});
//boards

export const setGetBoardsSuccess = (boards) => ({
  type: BOARDS.GET_ALL_BOARDS_SUCCESS,
  payload: boards,
});

export const setGetBoardsError = (error) => ({
  type: BOARDS.GET_ALL_BOARDS_ERROR,
  payload: error,
});

export const getAllBoards = (boards) => ({
  type: BOARDS.GET_ALL_BOARDS,
  payload: boards,
});

export const setSpecificBoards = (board) => ({
  type: BOARDS.GET_ONE_BOARD_SUCCESS,
  payload: board,
});

export const getSpecificBoard = (payload) => ({
  type: BOARDS.GET_ONE_BOARD,
  payload: payload,
});
