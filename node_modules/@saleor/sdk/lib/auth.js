"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authLink = exports.invalidTokenLinkWithTokenHandler = exports.setAuthToken = exports.getAuthToken = exports.isJwtError = exports.JWTError = void 0;
const apollo_link_context_1 = require("apollo-link-context");
const apollo_link_error_1 = require("apollo-link-error");
const utils_1 = require("./utils");
var JWTError;
(function (JWTError) {
    JWTError["invalid"] = "InvalidTokenError";
    JWTError["invalidSignature"] = "InvalidSignatureError";
    JWTError["expired"] = "ExpiredSignatureError";
})(JWTError = exports.JWTError || (exports.JWTError = {}));
function isJwtError(error) {
    var _a;
    let jwtError;
    try {
        jwtError = !!utils_1.findValueInEnum((_a = error.extensions) === null || _a === void 0 ? void 0 : _a.exception.code, JWTError);
    }
    catch (e) {
        jwtError = false;
    }
    return jwtError;
}
exports.isJwtError = isJwtError;
function getAuthToken() {
    try {
        return localStorage.getItem("token");
    }
    catch (_a) {
        return null;
    }
}
exports.getAuthToken = getAuthToken;
function setAuthToken(token) {
    localStorage.setItem("token", token);
    const authEvent = new Event("auth");
    dispatchEvent(authEvent);
}
exports.setAuthToken = setAuthToken;
// possibly remove callback here and use event emitter
exports.invalidTokenLinkWithTokenHandler = (tokenExpirationCallback) => {
    const link = apollo_link_error_1.onError((error) => {
        var _a;
        const isTokenExpired = (_a = error.graphQLErrors) === null || _a === void 0 ? void 0 : _a.some(isJwtError);
        if (isTokenExpired ||
            (error.networkError && error.networkError.statusCode === 401)) {
            tokenExpirationCallback();
        }
    });
    return link;
};
exports.authLink = apollo_link_context_1.setContext((_, context) => {
    const authToken = getAuthToken();
    if (authToken) {
        return Object.assign(Object.assign({}, context), { headers: Object.assign(Object.assign({}, context.headers), { Authorization: authToken ? `JWT ${authToken}` : null }) });
    }
    return context;
});
//# sourceMappingURL=auth.js.map