import App from "../config/App";

export default class CredentialService {

    store(credentials) {
        const { accessToken, refreshToken } = credentials;
        this.setAccessToken(accessToken);
        this.setRefreshToken(refreshToken);
    }

    removeAll() {
        localStorage.removeItem(App.KEY_ACCESS_TOKEN);
        localStorage.removeItem(App.KEY_REFRESH_TOKEN);  
    }

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