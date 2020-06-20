import React from "react";

import TransactionList from "../../containers/TransactionList";
import NewTransaction from "../../containers/NewTransaction";

const Transaction = () => {
    return (
        <div>
            <TransactionList />
            <NewTransaction />
        </div>
    );
};

export default Transaction;
