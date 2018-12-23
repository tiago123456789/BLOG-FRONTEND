import ArtigoService from "../../service/ArtigoService";
import TypeAction from "../../config/TypeAction";

const artigoService = new ArtigoService();

const findAll = () => {
    return async dispatch => {
        const articles = await artigoService.findAll();
        return dispatch({ 
            type: TypeAction.LISTAR_ARTICLES, data: { articles: articles }
        });
    }
};

const addCategory = (event) => {
    return { type: TypeAction.ADD_CATEGORY, data: { category: event.target.value } };
};

const addTag = (event) => {
    return { type: TypeAction.ADD_TAG_IN_ARTICLE, data: { tag: event.target.value } };
};

const removeTag = (value) => {
    return (dispath, getState) => {
        console.log(getState())
        const positionItemRemove = getState().tagsSelected.indexOf(value);
        return dispath({ type: TypeAction.REMOVE_TAG, data: { positionItemRemove: positionItemRemove }});
    }
};

const removeCategory = (value) => {
    return (dispath, getState) => {
        const positionItemRemove = getState().categoriesSelected.indexOf(value);
        return dispath({ type: TypeAction.REMOVE_CATEGORY, data: { positionItemRemove: positionItemRemove }});
    }
};

export { findAll, addCategory, addTag, removeCategory, removeTag };