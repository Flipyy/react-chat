import React from "react";
import {Redirect, Route} from "react-router-dom";

import {Auth, Home} from "./pages";
import {useSelector} from "react-redux";


function App() {

    const isAuth = useSelector(({user}) => user.isAuth)

    return (
        <div className="wrapper">
            <Route exact path={["/login", "/register"]} component={Auth} />
            <Route exact path="/" render={() => ( isAuth ? <Home /> : <Redirect to="/login" />)} />
        </div>
    );
}

export default App;
