import { api } from "../constants";

export const userService = {
    login,
    userToken,
    register,
    getTransactionList,
    getUsers,
    sendTransaction,
    logout,
};

function login(email, password) {
    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
    };

    return fetch(`${api.url}${api.tails.login}`, requestOptions)
        .then(handleResponse)
        .then((user) => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem("user", JSON.stringify(user));

            return user;
        });
}

function logout() {
    localStorage.removeItem("user");
}

function userToken(token) {
    const requestOptions = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    };

    return fetch(`${api.url}${api.tails.info}`, requestOptions)
        .then(handleResponse)
        .then((user) => {
            return user;
        });
}

function getTransactionList(token) {
    const requestOptions = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    };

    return fetch(`${api.url}${api.tails.transactions}`, requestOptions)
        .then(handleResponse)
        .then((data) => {
            return data;
        });
}

function sendTransaction(data, token) {
    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
    };

    return fetch(`${api.url}${api.tails.transactions}`, requestOptions)
        .then(handleResponse)
        .then((data) => {
            return data;
        });
}

function register(user) {
    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
    };

    return fetch(`${api.url}${api.tails.registration}`, requestOptions).then(
        handleResponse
    );
}

function getUsers(filter, token) {
    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(filter),
    };

    return fetch(`${api.url}${api.tails.filter}`, requestOptions)
        .then(handleResponse)
        .then((data) => {
            return data;
        });
}

function handleResponse(response) {
    return response.text().then((text) => {
        let data;

        if (!response.ok) {
            const error = text || response.statusText;

            return Promise.reject(error);
        } else {
            data = text && JSON.parse(text);

            return data;
        }
    });
}
