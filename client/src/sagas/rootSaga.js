import boardsSaga from "./boardsSaga";
import userSaga from "./userSaga";
import { spawn, call, all } from "redux-saga/effects";

function* rootSaga() {
  const sagas = [userSaga, boardsSaga];

  yield all(
    sagas.map((saga) =>
      spawn(function* () {
        while (true) {
          try {
            yield call(saga);
            break;
          } catch (e) {
            console.log(e);
          }
        }
      })
    )
  );
}

export default rootSaga;
