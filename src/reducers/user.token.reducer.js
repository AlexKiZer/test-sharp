import { userConstants } from "../constants";
import Immutable from "seamless-immutable";

const initialState = Immutable({});

export function userData(state = initialState, action) {
  switch (action.type) {
    case userConstants.LOGIN_TOKEN_REQUEST:
      return {
        ...state,
        ...action.payload,
      };
    case userConstants.LOGIN_TOKEN_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };
    case userConstants.LOGIN_TOKEN_FAILURE:
      return {};
    default:
      return state;
  }
}
