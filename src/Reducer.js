import { combineReducers } from "redux";
import tagReducer from "./components/tag/Reducer";

export default combineReducers({
    tag: () => tagReducer
});