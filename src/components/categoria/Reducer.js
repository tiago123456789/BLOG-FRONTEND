import TypeAction from "../../config/TypeAction";

const stateInitial = {
    categories: [],
    description: ""
};

export default (state = stateInitial, action) => {
    const data = action.data;
    switch (action.type) {
        case TypeAction.LISTAR_CATEGORY:
            return { ...state, ...data };
        case TypeAction.FIND_ID:
        case TypeAction.MODIFIED_VALUE_FIELD:
        case TypeAction.CLEAN_FORM:
            return { ...state, description: data.description };
        default:
            return state;
    }
}