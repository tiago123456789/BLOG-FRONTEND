import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import ReduxMulti from "redux-multi";

import rootReducer from "./Reducer";
import PainelAdmin from "./components/PainelAdmin";

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = applyMiddleware(ReduxMulti, ReduxThunk)(createStore)(rootReducer, devTools);

ReactDOM.render(
    <Provider store={store}>
        <PainelAdmin/>
    </Provider>,
    document.getElementById("root"));