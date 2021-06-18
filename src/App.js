import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";

import {Auth, Home} from "./pages";
import {useSelector} from "react-redux";


function App() {

    const isAuth = useSelector(({user}) => user.isAuth)

    return (
        <div className="wrapper">
            <Switch>
                <Route exact path={["/signin", "/signup", "/signup/verify"]} component={Auth}/>
                <Route exact path="/" render={() => (isAuth ? <Home/> : <Redirect to="/signin"/>)}/>
            </Switch>
        </div>
    );
}

export default App;
