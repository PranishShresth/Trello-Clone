import { fork, call, put, takeLatest } from "redux-saga/effects";
import { push } from "connected-react-router";
import { fetchLoggedUser, RegisterUser, getCurrentUser } from "../utils/api";
import {
  setUser,
  setUserError,
  setRegisterError,
  setRegisterSuccess,
} from "../actions/index";
import { USER } from "../constants";

function* fetchCurrentUser(action) {
  try {
    const {
      data: { user },
    } = yield call(fetchCurrentUser, action.payload);
    yield put(setUser(user));
  } catch (err) {}
}
function* LoginUser(action) {
  try {
    const { data, status } = yield call(fetchLoggedUser, action.payload);
    switch (status) {
      case 200:
        localStorage.setItem("jwt-token", data.token);
        yield put(setUser(data.user));
        yield put(push(`/home/${data.user.name}`));
        break;
      case 403:
        yield put(setUserError("Login Failed. Please Try Again"));
        break;

      default:
        return status;
    }
  } catch (error) {
    console.log(error);
    yield put(setUserError("Login Failed. Please Try Again"));
  }
}

function* userSaga() {
  yield takeLatest(USER.LOGIN_USER, LoginUser);
  yield takeLatest(USER.LOGIN_USER, fetchCurrentUser);
}

export default userSaga;
