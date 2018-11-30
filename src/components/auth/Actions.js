import TypeAction from "./../../config/TypeAction";
import AuthService from "./../../service/AuthService";
import ErrorResponseService from "../../service/ErrorResponseService";
import { toastr } from "react-redux-toastr";

const authService = new AuthService();

const changeFieldForm = (key, value) => {
    return { type: TypeAction.MODIFIED_VALUE_FIELD, data: { [key]: value }};
}

const authenticate = (credentials) => {
    return async dispatch => {
        try {
            const result = await authService.login(credentials);
            toastr.success("Welcome panel admin blog!!!");
            console.log(result);
        } catch(error) {
            console.log(error.response);
            toastr.error("Auth", ErrorResponseService.getMsgErroInReponse(error));
        }        
    }
}

export { changeFieldForm, authenticate }

