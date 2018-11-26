import TypeAction from "../../config/TypeAction";

const stateInitial = {
    categories: []
};

export default (state = stateInitial, action) => {
    const data = action.data;
    switch (action.type) {
        case TypeAction.LISTAR_CATEGORY:
            return { ...state, ...data };
        default:
            return state;
    }
}