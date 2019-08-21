import { takeEvery, call, select, put } from "redux-saga/effects";
import { autentication } from "../Services/Firebase";
import { database } from "../Services/Firebase";
import constants from "../Constants";
import { actionAddPostersStoreHome } from "../Actions";

const registerUserFirebase = values =>
  autentication
    .createUserWithEmailAndPassword(values.email, values.password)
    .then(result => result);

const registerDatabaseFirebase = ({ uid, email, name, photo }) =>
  database.ref("users/" + uid).set({ email, name, photo });

const uploadPhotoCloudinary = ({ image }) => {
  const { uri, type } = image;
  const splitName = uri.split("/");
  const name = [...splitName].pop();
  const photo = {
    uri,
    type,
    name
  };
  const formImage = new FormData();
  formImage.append("upload_preset", constants.cloudinaryPreset);
  formImage.append("file", photo);
  return fetch(constants.cloudinaryUrl, {
    method: "POST",
    body: formImage
  }).then(() => name);
};

function* generatorRegisterUser(values) {
  try {
    const image = yield select(state => state.reducerImageRegister);
    urlPhoto = yield call(uploadPhotoCloudinary, image);
    const photo = constants.cloudinaryUrlImages + urlPhoto;
    const resultRegisterUser = yield call(registerUserFirebase, values.data);
    const { uid, email } = resultRegisterUser.user;
    const {
      data: { name }
    } = values;
    yield call(registerDatabaseFirebase, { uid, email, name, photo });
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

const updateUserFirebase = ({ photoPoster, textPoster, uid }) =>
  database
    .ref("poster/")
    .push({ photoPoster, textPoster, uid })
    .then(result => result);

const updateUserPoster = ({ key, uid }) =>
  database
    .ref(`user-poster/${uid}`)
    .update({ [key]: true })
    .then(result => result);

function* generatorUploadPoster({ values }) {
  try {
    const image = yield select(state => state.reducerImagePoster);
    const user = yield select(state => state.reducerSession);
    urlPhotoPoster = yield call(uploadPhotoCloudinary, image);
    const photoPoster = constants.cloudinaryUrlImages + urlPhotoPoster;
    const updateFirebaseUser = yield call(updateUserFirebase, {
      photoPoster,
      textPoster: values.textPoster ? values.textPoster : "",
      uid: user.uid
    });
    const splitName = String(updateFirebaseUser).split("/");
    const key = [...splitName].pop();
    const resultUpdate = yield call(updateUserPoster, { key, uid: user.uid });
    console.log("resultUpdate: ", resultUpdate);
  } catch (error) {
    console.log("error generatorUploadPoster: ", error);
  }
}

const loadPosters = () =>
  database
    .ref("poster/")
    .once("value")
    .then(snapshot => {
      let index = 0;
      let posters = [];
      snapshot.forEach(childSnapshot => {
        let poster = childSnapshot.val();
        poster.key = String(index + 1);
        posters.push(poster);
        index++;
      });
      return posters;
    });

function* generatorLoadPosters() {
  try {
    const listPosts = yield call(loadPosters);
    yield put(actionAddPostersStoreHome(listPosts));
  } catch (error) {
    console.log("generatorLoadPosters error: ", error);
  }
}

export default function* funcionPrimaria() {
  yield takeEvery(constants.createUser, generatorRegisterUser);
  yield takeEvery(constants.loginUser, generatorLogin);
  yield takeEvery(constants.uploadPoster, generatorUploadPoster);
  yield takeEvery(constants.loadPosters, generatorLoadPosters);
}
