import { combineReducers } from "redux";

import { authentication } from "./authentication.reducer";
import { registration } from "./registration.reducer";
import { users } from "./users.reducer";
import { alert } from "./alert.reducer";
import { userData } from "./user.token.reducer";
import { transactionsData } from "./transaction.reducer";
import { sendTransactionData } from "./send.transaction.reducer";

const rootReducer = combineReducers({
    authentication,
    registration,
    users,
    alert,
    userData,
    transactionsData,
    sendTransactionData,
});

export default rootReducer;
