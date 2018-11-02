import AbstractService from "./AbstractService";

export default class CrudService extends AbstractService {

    constructor(endpoint, isOperationsNeedAuthorization = false) {
        super();
        this._endpoint = endpoint;
        this._isOperationsNeedAuthorization = isOperationsNeedAuthorization;
    }

    findAll() {
        return this.getClient(this._isOperationsNeedAuthorization)
            .get(this.getUrl(`${this._endpoint}`))
            .then(this.getDataOfResponse);
    }

    findById(id) {
        return this.getClient(this._isOperationsNeedAuthorization)
            .get(this.getUrl(`${this._endpoint}/${id}`))
            .then(this.getDataOfResponse);
    }

    update(id, dataModified) {
        return this.getClient(this._isOperationsNeedAuthorization)
            .put(this.getUrl(`${this._endpoint}/${id}`), dataModified);
    }

    remove(id) {
        return this.getClient(this._isOperationsNeedAuthorization)
            .delete(this.getUrl(`${this._endpoint}/${id}`));
    }

    save(data) {
        return this.getClient(this._isOperationsNeedAuthorization)
                   .post(this.getUrl(`${this._endpoint}`, data));
    }
}