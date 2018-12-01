import TypeAction from "../../config/TypeAction";

const initialState = {
    email: "",
    password: ""
};

export default (state = initialState, action) => {
    const data = action.data;
    switch (action.type) {
        case TypeAction.MODIFIED_VALUE_FIELD:
            const value = data[data.field];
            return {...state, [data.field]: value };
        case TypeAction.CLEAN_FORM:
            return { ...state, ...data };
        default:
            return state;
    }
}