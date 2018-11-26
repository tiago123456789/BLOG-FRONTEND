import {combineReducers} from "redux";
import tagReducer from "../components/tag/Reducer";
import {reducer as toastrReducer} from 'react-redux-toastr'

export default combineReducers({
    tag: tagReducer,
    toastr: toastrReducer
});