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
}


export { findAll }