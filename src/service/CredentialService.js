import App from "../config/App";

export default class CredentialService {

    getAccessTokenWithPrefix() {
        return `${App.KEY_PREFIX_TOKEN}${this.getAccessToken()}`
    }

    getAccessToken() {
        return localStorage.getItem(App.KEY_ACCESS_TOKEN);
    }

    setAccessToken(accessToken) {
        localStorage.setItem(App.KEY_ACCESS_TOKEN, accessToken);
    }

    getRefreshToken() {
        return localStorage.getItem(App.KEY_REFRESH_TOKEN);
    }

    setRefreshToken(refreshToken) {
        localStorage.setItem(App.KEY_REFRESH_TOKEN, refreshToken);
    }
}