import TypeAction from "../../config/TypeAction";

const initialState = {
    email: "",
    password: "",
    redirect: false
};

export default (state = initialState, action) => {
    const data = action.data;
    switch (action.type) {
        case TypeAction.MODIFIED_VALUE_FIELD:
            const value = data[data.field];
            return { ...state, [data.field]: value };
        case TypeAction.USER_AUTHENTICATED:
            return { ...state, redirect: data.redirect }
        case TypeAction.CLEAN_FORM:
            return { ...state, ...data };
        default:
            return state;
    }
}