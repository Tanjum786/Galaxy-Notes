export const authReducer = (authState, authAction) => {
  switch (authAction.type) {
    case "USER-DETAILES":
      return {
        ...authState,
        [authAction.name]: authAction.payload,
      };
    case "SUBMIT":
      return {
        ...authState,
        isSubmit: true,
      };
    case "EMAIL":
      return {
        ...authState,
        email: authAction.payload,
      };
    case "PASSWORD":
      return {
        ...authState,
        password: authAction.payload,
      };

    case "LOGIN_SUBMIT":
      return {
        ...authState,
        isSubmit: true,
      };
    case "GUEST_LOGIN":
      return {
        ...authState,
        email: authAction.payload.email,
        password: authAction.payload.password,
      };
    case "LOGOUT":
      return {
        ...authState,
        isSubmit: false,
        email:"",
        password:"",
        lastName:"",
        confirmPassword:"",
        firstName:""
      };
    default:
      return authState;
  }
};
