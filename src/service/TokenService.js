import jwt from "jsonwebtoken";

export default class TokenService {

    isValid(token) {
        if (!token || !this._isJwt(token)) {
            return false;
        }
        console.log(token);
        const { exp } = this._getPayload(token);
        const dateCurrent = Date.now();
        
        if (exp < (new Date().getTime() / 1000)) {
            return false;
        }

        return true;
    }

    _getPayload(token) {
        const decodeToken = jwt.decode(token);
        return decodeToken;
    }

    _isJwt(token) {
        const regexJwt = /^([a-zA-z0-9])+\.([a-zA-z0-9])+\.([a-zA-z0-9])+$/g;
        return regexJwt.test(token);       
    }
}