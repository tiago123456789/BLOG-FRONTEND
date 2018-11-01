const initialState = {
    tags: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case TypeAction.LISTAR_TAG:
            return {...state, tags: [...action.data] };
        default:
            return state;
    }
}