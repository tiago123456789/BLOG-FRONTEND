import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import ReduxMulti from "redux-multi";
import ReduxToastr from 'react-redux-toastr'

import "./style/react-redux-toastr.min.css";

import rootReducer from "./main/Reducer";
import App from "./main/App";

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = applyMiddleware(ReduxMulti, ReduxThunk)(createStore)(rootReducer, devTools);

ReactDOM.render(
    <Provider store={store}>
        <div>
            <App/>
            <ReduxToastr
                timeOut={4000}
                newestOnTop={false}
                preventDuplicates
                position="top-right"
                transitionIn="fadeIn"
                transitionOut="fadeOut"
                progressBar
                closeOnToastrClick/>
        </div>
    </Provider>,
    document.getElementById("root"));