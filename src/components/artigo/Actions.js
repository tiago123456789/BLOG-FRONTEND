import { toastr } from "react-redux-toastr";

import ArtigoService from "../../service/ArtigoService";
import ErrorResponseService from "../../service/ErrorResponseService";
import TypeAction from "../../config/TypeAction";

const artigoService = new ArtigoService();

const changeDataFieldForm = (field, data) => {
    return { type: TypeAction.MODIFIED_VALUE_FIELD, data: { field: field, value: data } };
}

const findAll = () => {
    return async dispatch => {
        const articles = await artigoService.findAll();
        return dispatch({
            type: TypeAction.LISTAR_ARTICLES, data: { articles: articles }
        });
    }
};

const findById = (id) => {
    return async dispatch => {
        const article = await artigoService.findById(id);
        return dispatch({
            type: TypeAction.FIND_ID, data: {
                title: article.title, categoriesSelected: [article.category],
                tagsSelected: [article.tags], content: article.content
            }
        });
    }
}

const addCategory = (event) => {
    return { type: TypeAction.ADD_CATEGORY, data: { category: event.target.value } };
};

const addTag = (event) => {
    return { type: TypeAction.ADD_TAG_IN_ARTICLE, data: { tag: event.target.value } };
};

const removeTag = (value) => {
    return (dispath, getState) => {
        const positionItemRemove = getState().article.tagsSelected.indexOf(value);
        return dispath({ type: TypeAction.REMOVE_TAG, data: { positionItemRemove: positionItemRemove } });
    }
};

const removeCategory = (value) => {
    return (dispath, getState) => {
        const positionItemRemove = getState().article.categoriesSelected.indexOf(value);
        return dispath({ type: TypeAction.REMOVE_CATEGORY, data: { positionItemRemove: positionItemRemove } });
    }
};

const save = (data) => {
    return async dispatch => {
        await artigoService.save(data);
        toastr.success("Article created success!!!");
        return dispatch(cleanForm());
    }
}

const update = (id, data) => {
    return async dispatch => {
        try {
            await artigoService.update(id, data);
            toastr.success("Article updated success!!!");
            return dispatch(cleanForm());
        } catch (error) {
            toastr.error(ErrorResponseService.getMsgErroInReponse(error));
        }

    }
}

const cleanForm = () => {
    return { type: TypeAction.CLEAN_FORM, data: { title: "", categoriesSelected: [], tagsSelected: [] } };
}

const remove = (id) => {
    return async dispatch => {
        await artigoService.remove(id);
        toastr.success("Deleted success!!");
        return dispatch(findAll());
    }
}

export {
    findAll, addCategory, addTag, save, remove, findById, update,
    removeCategory, removeTag, changeDataFieldForm
};