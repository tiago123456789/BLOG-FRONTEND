import axios from "axios";
import CredentialService from "./CredentialService"
import App from "../config/App";

export default class AbstractService {

    constructor() {
        this._credentialService = new CredentialService();
    }

    getDataOfResponse(response) {
        if (response != undefined) {
            return response.data;
        }

        return response;
    }

    getClient(isAuthenticated = false) {
        if (isAuthenticated) {
            return axios.create({
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