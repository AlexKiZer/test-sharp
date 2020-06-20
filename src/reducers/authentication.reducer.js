import { userConstants } from "../constants";
import Immutable from "seamless-immutable";

let user = JSON.parse(localStorage.getItem("user"));
const initialState = user ? Immutable({ loggedIn: true, user }) : Immutable({});

export function authentication(state = initialState, action) {
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      return {
        loggingIn: true,
        user: action.user,
      };
    case userConstants.LOGIN_SUCCESS:
      return {
        loggedIn: true,
        user: action.user,
      };
    case userConstants.LOGIN_FAILURE:
      return {};
    case userConstants.LOGOUT:
      return {};
    default:
      return state;
  }
}
