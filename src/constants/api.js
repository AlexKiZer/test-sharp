export const api = {
    url: "http://193.124.114.46:3001/",
    testUser: {
        email: "kizerdev@gmail.com",
        password: "test",
    },
    tails: {
        registration: "users",
        login: "sessions/create",
        transactions: "api/protected/transactions",
        info: "api/protected/user-info",
        filter: "api/protected/users/list",
    },
};
