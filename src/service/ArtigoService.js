import CrudService from "./CrudService";

export default class ArtigoService extends CrudService {

    constructor() {
        super("articles", true);
    }
}