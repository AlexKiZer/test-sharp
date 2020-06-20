import { userConstants } from "../constants";
import Immutable from "seamless-immutable";

const initialState = Immutable({
  list: [],
});

export function transactionsData(state = initialState, action) {
  switch (action.type) {
    case userConstants.TRANSACTIONS_LIST_REQUEST:
      return {};
    case userConstants.TRANSACTIONS_LIST_SUCCESS:
      return {
        list: action.payload,
      };
    case userConstants.TRANSACTIONS_LIST_FAILURE:
      return {};
    default:
      return state;
  }
}
