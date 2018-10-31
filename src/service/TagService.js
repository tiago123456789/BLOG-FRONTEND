import CrudService from "./CrudService";

export default class TagService extends CrudService {

    constructor() {
        super("tags", true);
    }

}