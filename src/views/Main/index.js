import React from "react";

import LoginBaseGrid from "../../components/LoginBaseGrid";
import Login from "../../containers/Login";

const Main = () => {
    return (
        <div>
            <LoginBaseGrid title="Sign in">
                <Login />
            </LoginBaseGrid>
        </div>
    );
};

export default Main;
