import React from "react";
import Avatar from "@material-ui/core/Avatar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
    root: {
        height: "100vh",
        "&_reverse": {
            flexDirection: "row-reverse",
        },
    },
    image: {
        backgroundImage: "url(https://source.unsplash.com/random)",
        backgroundRepeat: "no-repeat",
        backgroundColor:
            theme.palette.type === "light"
                ? theme.palette.grey[50]
                : theme.palette.grey[900],
        backgroundSize: "cover",
        backgroundPosition: "center",
    },
    paper: {
        margin: theme.spacing(8, 4),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
}));

const LoginBaseGrid = ({ children, right = true, title }) => {
    const classes = useStyles();

    return (
        <Grid
            container
            component="main"
            className={`${classes.root} ${!right && `${classes.root}_reverse`}`}
        >
            <CssBaseline />
            <Grid item xs={false} sm={4} md={7} className={classes.image} />
            <Grid
                item
                xs={12}
                sm={8}
                md={5}
                component={Paper}
                elevation={6}
                square
                container
                alignItems="center"
            >
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    {title && (
                        <Typography component="h1" variant="h5">
                            {title}
                        </Typography>
                    )}

                    {children}
                </div>
            </Grid>
        </Grid>
    );
};

LoginBaseGrid.propTypes = {
    children: PropTypes.node.isRequired,
    title: PropTypes.string,
    right: PropTypes.bool,
};

export default LoginBaseGrid;
