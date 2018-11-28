import { toastr } from "react-redux-toastr";

import CategoriaService from "./../../service/CategoriaService";
import TypeAction from "../../config/TypeAction";
import ErrorResponseService from "../../service/ErrorResponseService";

const categoriaService  = new CategoriaService();

const findAll = () => {
    return async dispatch => {
        const results = await categoriaService.findAll();
        return dispatch({ type: TypeAction.LISTAR_CATEGORY ,data: { categories: results }})
    }
};

const remove = (id) => {
  return async dispatch => {
      await categoriaService.remove(id);
      return dispatch(findAll());
  }
};

const changeFieldInput = (value) => {
    return { type: TypeAction.MODIFIED_VALUE_FIELD, data: { description: value }};
};

const save = (newData) => {
    return async dispatch => {
        try {
            await categoriaService.save(newData);
            toastr.success("Category", "Saved success!");
            return dispatch(cleanForm());
        } catch (error) {
            console.log(error.response);
            toastr.error(ErrorResponseService.getMsgErroInReponse(error));
        }

    }
};

const cleanForm = () => {
    return { type: TypeAction.CLEAN_FORM, data: { description: "" }}
};

export  { findAll, remove, changeFieldInput, save };