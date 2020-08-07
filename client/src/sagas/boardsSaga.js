import { fork, call, put, takeLatest, takeEvery } from "redux-saga/effects";
import { push } from "connected-react-router";
import { getAllBoards, getSpecificBoard } from "../utils/api";
import {
  setGetBoardsError,
  setGetBoardsSuccess,
  setSpecificBoards,
} from "../actions/index";
import { BOARDS } from "../constants";

function* callGetAllBoards(action) {
  try {
    const boards = yield call(getAllBoards, action.payload);
    yield put(setGetBoardsSuccess(boards.data));
  } catch (err) {
    console.log(err);
    yield put(setGetBoardsError(err));
  }
}

function* callGetOneBoard({ payload }) {
  try {
    const board = yield call(getSpecificBoard, payload);
    console.log(board);
    yield put(setSpecificBoards(board.data));
  } catch (err) {
    console.log(err);
  }
}
function* boardsSaga() {
  yield takeEvery(BOARDS.GET_ALL_BOARDS, callGetAllBoards);
  yield takeEvery(BOARDS.GET_ONE_BOARD, callGetOneBoard);
}

export default boardsSaga;
