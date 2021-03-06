import { createStore, combineReducers, applyMiddleware } from "redux";
import { reducer as form } from "redux-form";
import createSagaMiddleware from "redux-saga";
import funcionPrimaria from "./Sagas/Sagas";
import constants from "./Constants";

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

const reducerImageRegister = (state = { image: null }, action) => {
  switch (action.type) {
    case constants.uploadImageRegister:
      return { image: action.image };
    case constants.clearImageRegister:
      return { image: null };
    default:
      return state;
  }
};

const reducerImagePoster = (state = { image: null }, action) => {
  switch (action.type) {
    case constants.uploadImagePoster:
      return { image: action.image };
    case constants.clearImagePoster:
      return { image: null };
    default:
      return state;
  }
};

const reducerPostersHome = (state = [], action) => {
  switch (action.type) {
    case constants.addPostersStoreHome:
      return [...state, ...action.listPosts];
    default:
      return state;
  }
};

const reducerAuthorsHome = (state = [], action) => {
  switch (action.type) {
    case constants.addAuthorsStoreHome:
      return [...state, ...action.listAuthors];
    default:
      return state;
  }
};

const sagaMiddleware = createSagaMiddleware();

const reducers = combineReducers({
  reducerSession,
  reducerImageRegister,
  reducerImagePoster,
  reducerPostersHome,
  reducerAuthorsHome,
  form
});
const store = createStore(reducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(funcionPrimaria);
export default store;
