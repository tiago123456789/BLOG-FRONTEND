import jwt from "jsonwebtoken";

export default class TokenService {

    isValid(token) {
        if (!token || !this._isJwt(token)) {
            return false;
        }

        const payloadToken = this._getPayload(token);
        const dateExpiredToken = payloadToken.exp;
        const dateCurrent = Date.now();
        const timeExpirationGreatThanDateCurrent = dateExpiredToken < Date.now() / 1000;
        return timeExpirationGreatThanDateCurrent;
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