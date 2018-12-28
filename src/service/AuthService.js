import AbstractService from "./AbstractService";
import TokenService from "./TokenService";
import CredentialService from "./CredentialService";

export default class AuthService extends AbstractService {

    constructor() {
        super();
        this._endpoint = "auth/login";
        this._tokenService = new TokenService();
        this._credentialService = new CredentialService();
    }

    login(credentials) {
        return this.getClient()
            .post(this.getUrl(`${this._endpoint}/`), credentials)
            .then(this.getDataOfResponse);
    }

    loginByRefreshToken(refreshToken) {
        return this.getClient()
            .post(this.getUrl(`${this._endpoint}/${refreshToken}/refresh`))
            .then(this.getDataOfResponse);
    }

    hasAccess() {
        const accessToken = this._credentialService.getAccessToken();
        const isValidAccessToken = this._tokenService.isValid(accessToken);
        return isValidAccessToken;        
    }
}