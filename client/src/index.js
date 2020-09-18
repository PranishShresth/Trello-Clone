import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./reducers/rootReducer";
import { Provider } from "react-redux";
import rootSaga from "./sagas/rootSaga";
import { createBrowserHistory } from "history";
import { BrowserRouter as Router, BrowserRouter } from "react-router-dom";
import { ConnectedRouter, routerMiddleware } from "connected-react-router";

const sagaMiddleware = createSagaMiddleware();
const history = createBrowserHistory();

const store = createStore(
  rootReducer(history),
  compose(
    applyMiddleware(sagaMiddleware, routerMiddleware(history))
    //   window.__REDUX_DEVTOOLS_EXTENSION__ &&
    //     window.__REDUX_DEVTOOLS_EXTENSION__({
    //       serialize: true,
    //       trace: true,
    //     })
    // )
  )
);

sagaMiddleware.run(rootSaga);
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <Router> */}
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
      {/* </Router> */}
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
