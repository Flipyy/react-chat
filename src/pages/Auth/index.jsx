import React from 'react';
import {Route} from "react-router-dom";

import {LoginForm, RegisterForm} from "../../modules";
import "./Auth.scss"

const Auth = () => {

    return (
        <div className="auth">
            <div className="auth__content">
                <Route exact path={["/", "/login"]} component={LoginForm} />
                <Route exact path="/register" component={RegisterForm} />
            </div>
        </div>
    );
};

export default Auth;