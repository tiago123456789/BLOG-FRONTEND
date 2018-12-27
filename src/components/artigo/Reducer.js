import TypeAction from "../../config/TypeAction";

const initialState = {
    title: "",
    articles: [],
    tagsSelected:   [],
    categoriesSelected: []
};

const quantidadeItemRemover = 1;

export default (state = initialState, action) => {
    const data = action.data;
    switch (action.type) {
        case TypeAction.CLEAN_FORM: 
            return { ...state, ...data };
        case TypeAction.ADD_CATEGORY:
            const categories = [...state.categoriesSelected, data.category];
            return { ...state, categoriesSelected: categories }
        case TypeAction.ADD_TAG_IN_ARTICLE:
            const tags = [...state.tagsSelected, data.tag];
            return { ...state, tagsSelected: tags };
        case TypeAction.REMOVE_TAG:
            const tagsRemove = state.tagsSelected;
            tagsRemove.splice(data.positionItemRemove, quantidadeItemRemover);
            return { ...state, tagsSelected: [...tagsRemove] };
        case TypeAction.REMOVE_CATEGORY:
            const categoriesRemove = state.categoriesSelected;
            categoriesRemove.splice(data.positionItemRemove, quantidadeItemRemover);
            return { ...state, categoriesSelected: [...categoriesRemove] };
        case TypeAction.MODIFIED_VALUE_FIELD:
            return { ...state, [data.field]: data.value };
        default:
            return state;
    }
}