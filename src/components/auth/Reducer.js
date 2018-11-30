import TypeAction from "../../config/TypeAction";

const initialState = {
    email: "",
    password: ""
};

export default (state = initialState, action) => {
    const data = action.data;
    switch (action.type) {
        case TypeAction.MODIFIED_VALUE_FIELD:
            return {...state, ...data };
        default:
            return state;
    }
}