import constants from "./Constants";

export const actionRegister = values => {
  return {
    type: constants.createUser,
    data: values
  };
};

export const actionLogin = values => {
  return {
    type: constants.loginUser,
    data: values
  };
};

export const actionDefineSession = user => {
  return {
    type: constants.defineSession,
    user
  };
};

export const actionCloseSession = () => {
  return {
    type: constants.closeSession
  };
};

export const actionUploadImageRegister = image => {
  return {
    type: constants.uploadImageRegister,
    image
  };
};

export const actionClearImage = () => {
  return {
    type: constants.clearImageRegister
  };
};

export const actionUploadImagePoster = image => {
  return {
    type: constants.uploadImagePoster,
    image
  };
};

export const actionClearImagePoster = () => {
  return {
    type: constants.clearImagePoster
  };
};

export const actionUploadPoster = values => {
  return {
    type: constants.uploadPoster,
    values
  };
};

export const actionLoadPosters = () => {
  return {
    type: constants.loadPosters
  };
};

export const actionAddPostersStoreHome = listPosts => {
  return {
    type: constants.addPostersStoreHome,
    listPosts
  };
};
