import {
  fork,
  call,
  put,
  takeLatest,
  delay,
  takeEvery,
} from "redux-saga/effects";
import { push, replace } from "connected-react-router";
import {
  fetchLoggedUser,
  RegisterUser,
  getCurrentUser,
  loginOauth,
  changeUserDetails,
} from "../utils/api";
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
    } = yield call(getCurrentUser, action.payload);
    yield put(setUser(user));
    // yield put(push(`/home/${user.name}`));
  } catch (err) {
    console.log(err);
  }
}

function* RegisterNewUser(action) {
  try {
    const { data, status } = yield call(RegisterUser, action.payload);
    switch (status) {
      case 201:
        localStorage.setItem("jwt-token", data.token);
        yield put(setUser(data.user));
        // yield put(push(`/home/${data.user.name}`));
        break;
      case 403:
        yield put(setRegisterError("Password Donot Match"));
        break;
      default:
        return status;
    }
  } catch (error) {
    yield put(setRegisterError("Sign up failed. Please Try again"));
  }
}
function* LoginUser(action) {
  try {
    const { data, status } = yield call(fetchLoggedUser, action.payload);
    switch (status) {
      case 200:
        localStorage.setItem("jwt-token", data.token);
        yield put(setUser(data.user));
        // yield put(push(`/home/${data.user.name}`));
        break;
      case 403:
        yield put(setRegisterError("Login Failed. Please Try Again"));
        break;

      default:
        return status;
    }
  } catch (error) {
    console.log(error);
    yield put(setUserError("Login Failed. Please Try Again"));
  }
}

function* updateUserDetails(action) {
  try {
    const resp = yield call(changeUserDetails, action.payload);
    console.log(resp);
    if (resp.status === 200) {
      yield put(setUser(resp.data));
    }
  } catch (err) {
    console.log(err);
  }
}
function* Oauth(action) {
  try {
    const { status, data } = yield call(loginOauth, action.payload);
    console.log(data);
    switch (status) {
      case 200:
        localStorage.setItem("jwt-token", data.token);
        yield put(setUser(data.user));
        // yield put(push(`/home/${data.user.name}`));
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
  yield takeLatest(USER.LOGIN_USER_OAUTH, Oauth);
  yield takeEvery(USER.UPDATE_CURRENT_USER, updateUserDetails);
  yield takeLatest(USER.FETCH_CURRENT_USER, fetchCurrentUser);
  yield takeLatest(USER.REGISTER_USER, RegisterNewUser);
}

export default userSaga;
