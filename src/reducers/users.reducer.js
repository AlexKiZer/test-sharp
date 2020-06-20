import { userConstants } from "../constants";
import Immutable from "seamless-immutable";

export function users(state = Immutable({}), action) {
  switch (action.type) {
    case userConstants.GET_USERS_REQUEST:
      return {
        loading: true,
      };
    case userConstants.GET_USERS_SUCCESS:
      return {
        list: action.payload,
      };
    case userConstants.GET_USERS_FAILURE:
      return {
        error: action.error,
      };
    default:
      return state;
  }
}
