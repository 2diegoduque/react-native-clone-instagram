import { createStore, combineReducers, applyMiddleware } from "redux";
import { reducer as form } from "redux-form";
import createSagaMiddleware from "redux-saga";
import funcionPrimaria from "./Sagas/Sagas";
import constants from "./Constants";

const reducerTest = (state = [0], action) => {
  switch (action.type) {
    case "aumentar_reducer_test":
      return [...state, 1];
    default:
      return state;
  }
};

const reducerSession = (state = null, action) => {
  switch (action.type) {
    case constants.defineSession:
      return action.user;
    case constants.closeSession:
      return false;
    default:
      return state;
  }
};

const sagaMiddleware = createSagaMiddleware();

const reducers = combineReducers({ reducerSession, reducerTest, form });
const store = createStore(reducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(funcionPrimaria);
export default store;
