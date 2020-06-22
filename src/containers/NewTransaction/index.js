import React, { Component } from "react";
import { connect } from "react-redux";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import { Formik, Form } from "formik";

import { userActions } from "../../actions";

import { Input } from "../../components/Input";
import { CustomSelect } from "../../components/Select";

const initialValues = {
    name: "",
    amount: "",
};

class NewTransaction extends Component {
    componentDidMount() {
        let user = JSON.parse(localStorage.getItem("user"));

        if (user) {
            this.props.getUsers({ filter: " " }, user.id_token);
        }
    }

    render() {
        const { users, userData, sendTransaction, authentication } = this.props;

        return (
            <div>
                <Container maxWidth="lg">
                    <Formik
                        enableReinitialize={false}
                        initialValues={initialValues}
                        onSubmit={(values, actions) => {
                            sendTransaction(
                                values,
                                authentication.user.id_token
                            );
                        }}
                    >
                        {(props) => (
                            <Form>
                                <CustomSelect
                                    native
                                    label="Users *"
                                    fullWidth
                                    options={users.list}
                                    name="name"
                                    required
                                />
                                <Input
                                    variant="outlined"
                                    margin="normal"
                                    name="amount"
                                    required
                                    fullWidth
                                    id="amount"
                                    label="Amount"
                                    type="number"
                                    inputProps={{
                                        min: "0",
                                        max: userData.balance,
                                    }}
                                />
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                >
                                    Send money
                                </Button>
                            </Form>
                        )}
                    </Formik>
                </Container>
            </div>
        );
    }
}

function mapStateToProps({ users, userData, authentication }) {
    return { users, userData, authentication };
}

const actionCreators = {
    getUsers: userActions.getUsers,
    sendTransaction: userActions.sendTransaction,
};

export default connect(mapStateToProps, actionCreators)(NewTransaction);
