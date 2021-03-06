import {combineReducers} from "redux";
import tagReducer from "../components/tag/Reducer";
import categoryReducer from "../components/categoria/Reducer";
import  authReducer from "../components/auth/Reducer";
import ArticleReducer from "../components/artigo/Reducer"
import {reducer as toastrReducer} from 'react-redux-toastr'

export default combineReducers({
    tag: tagReducer,
    category: categoryReducer,
    auth: authReducer,
    article: ArticleReducer,
    toastr: toastrReducer
});