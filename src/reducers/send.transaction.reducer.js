import { userConstants } from "../constants";
import Immutable from "seamless-immutable";

export function sendTransactionData(state = Immutable({}), action) {
  switch (action.type) {
    case userConstants.SEND_TRANSACTION_REQUEST:
      return {
        loading: true,
      };
    case userConstants.SEND_TRANSACTION_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };
    case userConstants.SEND_TRANSACTION_FAILURE:
      return {
        error: action.error,
      };
    default:
      return state;
  }
}
