import TypeAction from "../../config/TypeAction";

const initialState = {
    tags: [],
    name: "",
};

export default (state = initialState, action) => {
    const data = action.data;
    switch (action.type) {
        case TypeAction.LISTAR_TAG:
            return {...state, tags: [...data.tags]};
        case TypeAction.ADD_TAG:
        case TypeAction.CLEAN_FORM:
            return {...state, ...data };
        case TypeAction.MODIFIED_VALUE_FIELD:

            return {...state, "name": action.data.name };
        default:
            return state;
    }
}