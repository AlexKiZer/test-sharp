import React, { Component } from "react";
import { connect } from "react-redux";
import Container from "@material-ui/core/Container";

import { userActions } from "../../actions";

import TransactionsTable from "../../components/TransactionsTable";

class TransactionList extends Component {
    componentDidMount() {
        let user = JSON.parse(localStorage.getItem("user"));
        if (user) {
            this.props.getTransactionList(user.id_token);
        }
    }
    render() {
        const { transactionsData } = this.props;

        return (
            <div>
                <Container maxWidth="lg">
                    <TransactionsTable data={transactionsData.list} />
                </Container>
            </div>
        );
    }
}

function mapStateToProps({ transactionsData }) {
    return { transactionsData };
}

const actionCreators = {
    getTransactionList: userActions.getTransactionList,
};

export default connect(mapStateToProps, actionCreators)(TransactionList);
