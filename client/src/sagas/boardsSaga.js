import { fork, call, put, takeLatest, takeEvery } from "redux-saga/effects";
import { push } from "connected-react-router";
import { getAllBoards, getBoard } from "../utils/api";
import { setGetBoardsError, setGetBoardsSuccess } from "../actions/index";
import { BOARDS } from "../constants";

function* callGetAllBoards(action) {
  try {
    const boards = yield call(getAllBoards, action.payload);
    yield put(setGetBoardsSuccess(boards));
  } catch (err) {
    yield put(setGetBoardsError(err));
  }
}

function* boardsSaga() {
  yield takeEvery(BOARDS.GET_ALL_BOARDS, callGetAllBoards);
}

export default boardsSaga;
