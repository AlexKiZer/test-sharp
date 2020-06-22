import React, { Component } from "react";
import { connect } from "react-redux";
import Link from "@material-ui/core/Link";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import TypoGraphy from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

import { routing } from "../../constants";
import { userActions } from "../../actions";

class Header extends Component {
    componentDidMount() {
        let user = JSON.parse(localStorage.getItem("user"));

        if (user) {
            this.props.userToken(user.id_token);
        }
    }
    render() {
        const { userData, logout } = this.props;

        return (
            <header>
                <AppBar color="primary" position="static">
                    <Toolbar align="right">
                        {userData.name ? (
                            <Grid container direction="row" alignItems="center">
                                <TypoGraphy
                                    variant="body1"
                                    color="inherit"
                                >{`${userData.name} balance:${userData.balance}`}</TypoGraphy>
                                <Box ml={2}>
                                    <Link
                                        component="span"
                                        variant="body1"
                                        color="inherit"
                                        onClick={logout}
                                    >
                                        <span>Logout</span>
                                    </Link>
                                </Box>
                            </Grid>
                        ) : (
                            <Link
                                href={routing.main}
                                variant="body1"
                                color="inherit"
                            >
                                <span>Login</span>
                            </Link>
                        )}
                    </Toolbar>
                </AppBar>
            </header>
        );
    }
}

function mapStateToProps({ userData }) {
    return { userData };
}

const actionCreators = {
    userToken: userActions.userToken,
    logout: userActions.logout,
};

export default connect(mapStateToProps, actionCreators)(Header);
