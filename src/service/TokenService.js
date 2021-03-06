import jwt from "jsonwebtoken";

export default class TokenService {

    isValid(token) {
        if (!token || !this._isJwt(token)) {
            return false;
        }

        const { exp } = this.getPayload(token);
        const dateCurrent = Date.now();
        
        if (exp < (new Date().getTime() / 1000)) {
            return false;
        }

        return true;
    }

    getPayload(token) {
        const decodeToken = jwt.decode(token);
        return decodeToken;
    }

    _isJwt(token) {
        const regexJwt = /^([a-zA-z0-9])+\.([a-zA-z0-9])+\.([a-zA-z0-9])+$/g;
        return regexJwt.test(token);       
    }
}