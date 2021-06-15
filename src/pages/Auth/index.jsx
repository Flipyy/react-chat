import React from 'react';
import {Route} from "react-router-dom";

import CheckEmailInfo from "./components/CheckEmailInfo";
import {LoginForm, RegisterForm} from "../../modules";
import "./Auth.scss"


const Auth = () => {
    return (
        <div className="auth">
            <div className="auth__content">
                <Route exact path={"/signin"} component={LoginForm} />
                <Route exact path="/signup" component={RegisterForm} />
                <Route exact path="/signup/verify" component={CheckEmailInfo} />
            </div>
        </div>
    );
};

export default Auth;