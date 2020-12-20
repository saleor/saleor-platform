"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthJobs = exports.AuthJobsEvents = void 0;
const LocalStorageHandler_1 = require("../../helpers/LocalStorageHandler");
const types_1 = require("../../api/Auth/types");
const JobsHandler_1 = require("../JobsHandler");
var AuthJobsEvents;
(function (AuthJobsEvents) {
    AuthJobsEvents[AuthJobsEvents["SIGN_IN_TOKEN_REFRESHING"] = 0] = "SIGN_IN_TOKEN_REFRESHING";
})(AuthJobsEvents = exports.AuthJobsEvents || (exports.AuthJobsEvents = {}));
class AuthJobs extends JobsHandler_1.JobsHandler {
    constructor(localStorageHandler, apolloClientManager) {
        super();
        this.provideUser = () => __awaiter(this, void 0, void 0, function* () {
            const { data, error } = yield this.apolloClientManager.getUser();
            if (error) {
                return {
                    dataError: {
                        error,
                        type: types_1.DataErrorAuthTypes.GET_USER,
                    },
                };
            }
            return {
                data,
            };
        });
        this.registerAccount = ({ email, password, redirectUrl, }) => __awaiter(this, void 0, void 0, function* () {
            const { data, error } = yield this.apolloClientManager.registerAccount(email, password, redirectUrl);
            if (error) {
                return {
                    dataError: {
                        error,
                        type: types_1.DataErrorAuthTypes.REGISTER_ACCOUNT,
                    },
                };
            }
            return {
                data,
            };
        });
        this.resetPasswordRequest = ({ email, redirectUrl, }) => __awaiter(this, void 0, void 0, function* () {
            const { error } = yield this.apolloClientManager.resetPasswordRequest(email, redirectUrl);
            if (error) {
                return {
                    dataError: {
                        error,
                        type: types_1.DataErrorAuthTypes.RESET_PASSWORD_REQUEST,
                    },
                };
            }
            return {};
        });
        this.signIn = ({ email, password, }) => __awaiter(this, void 0, void 0, function* () {
            const { data, error } = yield this.apolloClientManager.signIn(email, password);
            if (error) {
                return {
                    dataError: {
                        error,
                        type: types_1.DataErrorAuthTypes.SIGN_IN,
                    },
                };
            }
            this.localStorageHandler.setSignInToken((data === null || data === void 0 ? void 0 : data.token) || null);
            this.localStorageHandler.setCsrfToken((data === null || data === void 0 ? void 0 : data.csrfToken) || null);
            return {
                data,
            };
        });
        this.signOut = () => __awaiter(this, void 0, void 0, function* () {
            this.localStorageHandler.clear();
            yield this.apolloClientManager.signOut();
            return {};
        });
        this.verifySignInToken = () => __awaiter(this, void 0, void 0, function* () {
            const token = LocalStorageHandler_1.LocalStorageHandler.getSignInToken();
            if (!token) {
                return {
                    dataError: {
                        error: new Error("Verify sign in token impossible. No token to verify received."),
                        type: types_1.DataErrorAuthTypes.VERIFY_TOKEN,
                    },
                };
            }
            const { data, error } = yield this.apolloClientManager.verifySignInToken({
                token,
            });
            if (error) {
                return {
                    dataError: {
                        error,
                        type: types_1.DataErrorAuthTypes.VERIFY_TOKEN,
                    },
                };
            }
            return {
                data,
            };
        });
        this.refreshSignInToken = ({ refreshToken, }) => __awaiter(this, void 0, void 0, function* () {
            this.notifyEvent(AuthJobsEvents.SIGN_IN_TOKEN_REFRESHING, true);
            const csrfToken = LocalStorageHandler_1.LocalStorageHandler.getCsrfToken();
            if (!csrfToken && !refreshToken) {
                return {
                    dataError: {
                        error: new Error("Refresh sign in token impossible. No refresh token received."),
                        type: types_1.DataErrorAuthTypes.REFRESH_TOKEN,
                    },
                };
            }
            const { data, error } = yield this.apolloClientManager.refreshSignInToken({
                csrfToken,
                refreshToken,
            });
            if (error) {
                this.notifyEvent(AuthJobsEvents.SIGN_IN_TOKEN_REFRESHING, false);
                return {
                    dataError: {
                        error,
                        type: types_1.DataErrorAuthTypes.REFRESH_TOKEN,
                    },
                };
            }
            this.localStorageHandler.setSignInToken((data === null || data === void 0 ? void 0 : data.token) || null);
            this.notifyEvent(AuthJobsEvents.SIGN_IN_TOKEN_REFRESHING, false);
            return {
                data,
            };
        });
        this.apolloClientManager = apolloClientManager;
        this.localStorageHandler = localStorageHandler;
    }
}
exports.AuthJobs = AuthJobs;
//# sourceMappingURL=AuthJobs.js.map