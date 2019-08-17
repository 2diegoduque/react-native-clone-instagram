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
