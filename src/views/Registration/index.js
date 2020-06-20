import React from "react";

import LoginBaseGrid from "../../components/LoginBaseGrid";
import SingUp from "../../containers/SingUp";

const Registration = () => {
    return (
        <div>
            <LoginBaseGrid right={false} title="Sign up">
                <SingUp />
            </LoginBaseGrid>
        </div>
    );
};

export default Registration;
