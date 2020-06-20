import React from "react";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { Formik, Form } from "formik";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { userActions } from "../../actions";
import { routing } from "../../constants";

import { Input } from "../../components/Input";

const useStyles = makeStyles((theme) => ({
    wrapper: {
        width: "100%", // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

const initialValues = {
    username: "",
    email: "",
    password: "",
};

const SingUp = ({ userActions }) => {
    const classes = useStyles();

    return (
        <Formik
            enableReinitialize={false}
            initialValues={initialValues}
            onSubmit={(values, actions) => {
                userActions.register(values);
            }}
        >
            {(props) => (
                <Form>
                    <div className={classes.wrapper}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Input
                                    autoComplete="username"
                                    name="username"
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="username"
                                    label="Name"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Input
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Input
                                    variant="outlined"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Sign Up
                        </Button>
                        <Grid container justify="flex-end">
                            <Grid item>
                                <Link href={routing.main} variant="body2">
                                    Already have an account? Sign in
                                </Link>
                            </Grid>
                        </Grid>
                    </div>
                </Form>
            )}
        </Formik>
    );
};

function mapDispatchToProps(dispatch) {
    return {
        userActions: bindActionCreators(userActions, dispatch),
    };
}

export default connect(null, mapDispatchToProps)(SingUp);
