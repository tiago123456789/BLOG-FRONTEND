import AbstractService from "./AbstractService";

export default class AuthService extends AbstractService {

    constructor() {
        super();
        this._endpoint = "auth";
    }

    login(credentials) {
        return this.getClient()
            .post(this.getUrl(`${this._endpoint}/login`), credentials)
            .then(this.getDataOfResponse);
    }

    loginByRefreshToken(refreshToken) {
        return this.getClient()
            .post(this.getUrl(`${this._endpoint}/${refreshToken}/refresh`))
            .then(this.getDataOfResponse);
    }

}