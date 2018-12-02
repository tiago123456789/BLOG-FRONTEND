import AbstractService from "./AbstractService";
import TokenService from "./TokenService";
import CredentialService from "./CredentialService";

export default class AuthService extends AbstractService {

    constructor() {
        super();
        this._endpoint = "auth";
        this._tokenService = new TokenService();
        this._credentialService = new CredentialService();
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

    async hasAccess() {
        const accessToken = this._credentialService.getAccessToken();
        const refreshToken = this._credentialService.getRefreshToken();

        const isValidAccessToken = this._tokenService.isValid(accessToken);
        const isValidRefreshToken = this._tokenService.isValid(refreshToken);
        
        if (!isValidAccessToken && isValidRefreshToken) {
            const result = await this.loginByRefreshToken(refreshToken);
            this._credentialService.store(result);
            return true;
        }
        
        if (isValidAccessToken) {
            return true;
        }

        return false;
    }
}