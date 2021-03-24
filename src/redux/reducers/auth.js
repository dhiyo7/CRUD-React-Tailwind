import actionAuth from "../actions/actionAuth";

const initialState = {
  data: [],
  isLogin: false,
  msgInvalid: "",
  status: {},
  isPending: false,
  isFulfilled: false,
  isRejected: false,
};

const auth = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionAuth.authLogin + "_PENDING":
      return {
        ...state,
        isPending: true,
      };
    case actionAuth.authLogin + "_REJECTED":
      return {
        ...state,
        isRejected: true,
        isPending: false,
        msgInvalid: payload.response.data.message.msg,
      };
    case actionAuth.authLogin + "_FULFILLED":
      if (payload.data.success === false) {
        return {
          ...state,
          data: [],
          msgInvalid: payload.response.data.message.msg,
          isLogin: false,
        };
      } else {
        console.log("SUCESS", payload.data);
        return {
          ...state,
          data: payload.data,
          msgInvalid: "",
          isLogin: true,
          isFulfilled: true,
          isPending: false,
          isRejected: false,
        };
      }
    case actionAuth.authRegister + "_PENDING":
      return {
        ...state,
        isPending: true,
      };
    case actionAuth.authRegister + "_REJECTED":
      return {
        ...state,
        isRejected: true,
        isPending: false,
      };
    case actionAuth.authRegister + "_FULFILLED":
      console.log("regis", payload.data.data);
      return {
        ...state,
        data: payload.data.data,
        msgInvalid: "",
        isLogin: false,
        isFulfilled: true,
        // isPending: false,
        // isRejected: false,
      };
    case actionAuth.authLogOut:
      return {
        data: [],
        isLogin: false,
        msgInvalid: "",
        isPending: false,
        isFulfilled: false,
        isRejected: false,
        status: {},
      };
    default:
      return state;
  }
};

export default auth;
