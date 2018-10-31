import axios from "axios";
import CredentialService from "./CredentialService"

export default class AbstractService {

    constructor() {
        this._credentialService = new CredentialService();
    }

    getDataOfResponse(response) {
        return response.data;
    }

    getClient(isAuthenticated = false) {
        if (isAuthenticated) {
            return axios({
                headers: {
                    [App.KEY_PARAM_AUTHORIZATION]: this._credentialService.getAccessTokenWithPrefix()
                }
            })
        }
        return axios;
    }

    getUrl(path)
    {
        return App.BASE_URL + "/" + path;
    }
}