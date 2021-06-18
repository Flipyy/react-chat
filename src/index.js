import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from "react-router-dom"
import { Provider } from 'react-redux';
import "emoji-mart/css/emoji-mart.css"

import App from './App';
import './scss/app.scss';
import store from './redux/store';
import {fetchUserData} from "./redux/actions/user";



store.dispatch(fetchUserData());

ReactDOM.render(
    <Router>
        <Provider store={store}>
            <App />
        </Provider>
    </Router>,
  document.getElementById('root')
);