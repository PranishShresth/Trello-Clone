import { BOARDS } from "../constants";
const initialState = {
  boards: [],
  error: "",
};
export const boardsReducer = (state = initialState, action) => {
  switch (action.type) {
    case BOARDS.GET_ALL_BOARDS_SUCCESS:
      return { ...state, boards: [...action.payload] };

    case BOARDS.GET_ALL_BOARDS_ERROR:
      const error = action.payload;
      return { ...state, error };

    default:
      return state;
  }
};
