import { userConstants, routing } from "../constants";
import { userService } from "../services";
import { alertActions } from "./";
import { history } from "../store/configureStore";

export const userActions = {
    login,
    userToken,
    register,
    getTransactionList,
    getUsers,
    sendTransaction,
};

function login(email, password) {
    return (dispatch) => {
        dispatch(request({ email }));

        userService.login(email, password).then(
            (user) => {
                dispatch(success(user));
                dispatch(userToken(user.id_token));
                history.push(routing.transaction);
            },
            (error) => {
                dispatch(failure(error.toString()));
                dispatch(alertActions.error(error.toString()));
            }
        );
    };

    function request(user) {
        return { type: userConstants.LOGIN_REQUEST, user };
    }
    function success(user) {
        return { type: userConstants.LOGIN_SUCCESS, user };
    }
    function failure(error) {
        return { type: userConstants.LOGIN_FAILURE, error };
    }
}

function userToken(token) {
    return (dispatch) => {
        dispatch(request({ token }));

        userService.userToken(token).then(
            (user) => {
                dispatch(success(user));
                history.push(routing.transaction);
            },
            (error) => {
                dispatch(failure(error.toString()));
                dispatch(alertActions.error(error.toString()));
            }
        );
    };

    function request(user) {
        return {
            type: userConstants.LOGIN_TOKEN_REQUEST,
            payload: user.user_info_token,
        };
    }
    function success(user) {
        return {
            type: userConstants.LOGIN_TOKEN_SUCCESS,
            payload: user.user_info_token,
        };
    }
    function failure(error) {
        return { type: userConstants.LOGIN_TOKEN_FAILURE, error };
    }
}

function register(user) {
    const data = user;

    return (dispatch) => {
        dispatch(request(user));
        userService.register(user).then(
            (user) => {
                dispatch(success());
                dispatch(login(data.email, data.password));
                history.push(routing.transaction);
            },
            (error) => {
                dispatch(failure(error.toString()));
                dispatch(alertActions.error(error.toString()));
            }
        );
    };

    function request(user) {
        return { type: userConstants.REGISTER_REQUEST, user };
    }
    function success(user) {
        return { type: userConstants.REGISTER_SUCCESS, user };
    }
    function failure(error) {
        return { type: userConstants.REGISTER_FAILURE, error };
    }
}

function getTransactionList(token) {
    return (dispatch) => {
        dispatch(request({ token }));

        userService.getTransactionList(token).then(
            (user) => {
                dispatch(success(user));
            },
            (error) => {
                dispatch(failure(error.toString()));
            }
        );
    };

    function request(user) {
        return {
            type: userConstants.TRANSACTIONS_LIST_REQUEST,
        };
    }
    function success(user) {
        return {
            type: userConstants.TRANSACTIONS_LIST_SUCCESS,
            payload: user.trans_token,
        };
    }
    function failure(error) {
        return { type: userConstants.TRANSACTIONS_LIST_FAILURE, error };
    }
}

function sendTransaction(data, token) {
    return (dispatch) => {
        dispatch(request({ data }));

        userService.sendTransaction(data, token).then(
            () => {
                dispatch(success());
                dispatch(userToken(token));
            },
            (error) => {
                dispatch(failure(error.toString()));
            }
        );
    };

    function request(data) {
        return {
            type: userConstants.SEND_TRANSACTION_REQUEST,
        };
    }
    function success(data) {
        return {
            type: userConstants.SEND_TRANSACTION_SUCCESS,
            payload: data,
        };
    }
    function failure(error) {
        return { type: userConstants.SEND_TRANSACTION_FAILURE, error };
    }
}

function getUsers(filter, token) {
    return (dispatch) => {
        dispatch(request({ filter }));

        userService.getUsers(filter, token).then(
            (data) => {
                dispatch(success(data));
            },
            (error) => {
                dispatch(failure(error.toString()));
            }
        );
    };

    function request(data) {
        return {
            type: userConstants.GET_USERS_REQUEST,
            payload: data,
        };
    }
    function success(data) {
        return {
            type: userConstants.GET_USERS_SUCCESS,
            payload: data,
        };
    }
    function failure(error) {
        return { type: userConstants.GET_USERS_FAILURE, error };
    }
}
