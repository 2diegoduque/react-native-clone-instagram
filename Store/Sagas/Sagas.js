import { takeEvery, call } from "redux-saga/effects";
import { autentication } from "../Services/Firebase";
import { database } from "../Services/Firebase";
import constants from "../Constants";

const registerUserFirebase = values =>
  autentication
    .createUserWithEmailAndPassword(values.email, values.password)
    .then(result => result);

const registerDatabaseFirebase = ({ uid, email, name }) =>
  database.ref("users/" + uid).set({ email, name });

function* generatorRegisterUser(values) {
  try {
    const resultRegisterUser = yield call(registerUserFirebase, values.data);
    const { uid, email } = resultRegisterUser.user;
    const {
      data: { name }
    } = values;
    yield call(registerDatabaseFirebase, { uid, email, name });
  } catch (error) {
    console.log("error generatorRegisterUser: ", error);
  }
}

const loginUserFirebase = ({ email, password }) =>
  autentication.signInWithEmailAndPassword(email, password).then(result => result);

function* generatorLogin(values) {
  try {
    const resultLoginUser = yield call(loginUserFirebase, values.data);
    console.log("resultLoginUser : ", resultLoginUser.user);
  } catch (error) {
    console.log("error generatorLogin: ", error);
  }
}

export default function* funcionPrimaria() {
  yield takeEvery(constants.createUser, generatorRegisterUser);
  yield takeEvery(constants.loginUser, generatorLogin);
}
