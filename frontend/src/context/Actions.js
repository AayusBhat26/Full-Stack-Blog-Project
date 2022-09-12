export const LoginStart = (userCred) => ({
  type: "LOGIN_START",
});

export const LoginSuccess = (user) => ({
  type: "LOGIN_SUCCESS",
  payload: user,
});

export const LoginFailure = () => ({
  type: "LOGIN_FAILURE",
});
export const Logout = () => ({
  type: "LOGOUT",
});






export const UpdateStart = (userCred) => ({
  type: "updated_START",
});

export const updatedSuccess = (user) => ({
  type: "updated_SUCCESS",
  payload: user,
});

export const updatedFailure = () => ({
  type: "updated_FAILURE",
});
