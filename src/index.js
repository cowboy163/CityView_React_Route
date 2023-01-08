import React from 'react';
import ReactDOM from 'react-dom/client';
import {applyMiddleware, createStore} from "redux";
import {Provider} from "react-redux";
import reducers from "./reducers";
import thunk from "redux-thunk";
import {BrowserRouter} from "react-router-dom";
import IndexRouter from "./IndexRouter";

const root = ReactDOM.createRoot(document.getElementById('root'));
const reduxStore = createStore(reducers, applyMiddleware(thunk))

root.render(
    <Provider store={reduxStore}>
        <BrowserRouter>
            <IndexRouter/>
        </BrowserRouter>
    </Provider>
);

