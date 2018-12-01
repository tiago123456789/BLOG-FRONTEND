import TypeAction from "./../../config/TypeAction";
import AuthService from "./../../service/AuthService";
import ErrorResponseService from "../../service/ErrorResponseService";
import { toastr } from "react-redux-toastr";

const authService = new AuthService();

const changeFieldForm = (key, value) => {
    return { type: TypeAction.MODIFIED_VALUE_FIELD, data: { [key]: value, field: key }};
}

const authenticate = (credentials) => {
    return async dispatch => {
        try {
            const result = await authService.login(credentials);
            toastr.success("Welcome panel admin blog!!!");
            return dispatch(clearForm());
        } catch(error) {
            toastr.error("Auth", ErrorResponseService.getMsgErroInReponse(error));
        }        
    }
}

const clearForm = () => {
    return { type: TypeAction.CLEAN_FORM, data: { email: "", password: "" } };
}

export { changeFieldForm, authenticate }

