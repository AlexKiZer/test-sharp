import React from "react";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { Formik, Form } from "formik";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { routing } from "../../constants";

import { userActions } from "../../actions";

import { Input } from "../../components/Input";

const useStyles = makeStyles((theme) => ({
    wrapper: {
        width: "100%", // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

const initialValues = {
    email: "",
    password: "",
};

const Login = ({ userActions }) => {
    const classes = useStyles();

    return (
        <Formik
            enableReinitialize={false}
            initialValues={initialValues}
            onSubmit={(values, actions) => {
                const { email, password } = values;

                userActions.login(email, password);
            }}
        >
            {(props) => (
                <Form>
                    <div className={classes.wrapper}>
                        <Input
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                        />
                        <Input
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Sign In
                        </Button>
                        <Grid container>
                            <Grid item>
                                <Link
                                    href={routing.registration}
                                    variant="body2"
                                >
                                    {"Don't have an account? Sign Up"}
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

export default connect(null, mapDispatchToProps)(Login);
