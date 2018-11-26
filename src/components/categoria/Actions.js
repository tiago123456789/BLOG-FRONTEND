import CategoriaService from "./../../service/CategoriaService";
import TypeAction from "../../config/TypeAction";

const categoriaService  = new CategoriaService();

const findAll = () => {
    return async dispatch => {
        const results = await categoriaService.findAll();
        return dispatch({ type: TypeAction.LISTAR_CATEGORY ,data: { categories: results }})
    }
};

export  { findAll };