"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocalStorageHandler = void 0;
const types_1 = require("./types");
const Proxy_1 = __importDefault(require("./Proxy"));
class LocalStorageHandler extends Proxy_1.default {
    static getCheckout() {
        return Proxy_1.default.retrieveObject(types_1.LocalStorageItems.CHECKOUT);
    }
    static getPayment() {
        return Proxy_1.default.retrieveObject(types_1.LocalStorageItems.PAYMENT);
    }
    static getJobs() {
        return Proxy_1.default.retrieveObject(types_1.LocalStorageItems.JOB_QUEUE_CHECKOUT);
    }
    static getSignInToken() {
        return Proxy_1.default.retrieveItem(types_1.LocalStorageItems.TOKEN);
    }
    static getCsrfToken() {
        return Proxy_1.default.retrieveItem(types_1.LocalStorageItems.CSRF_TOKEN);
    }
    setSignInToken(token) {
        this.saveItem(types_1.LocalStorageItems.TOKEN, token);
    }
    setCsrfToken(csrfToken) {
        this.saveItem(types_1.LocalStorageItems.CSRF_TOKEN, csrfToken);
    }
    setCheckout(checkout) {
        this.saveObject(types_1.LocalStorageItems.CHECKOUT, checkout);
    }
    setPayment(payment) {
        this.saveObject(types_1.LocalStorageItems.PAYMENT, payment);
    }
    setJobs(jobs) {
        return this.saveObject(types_1.LocalStorageItems.JOB_QUEUE_CHECKOUT, jobs);
    }
    clear() {
        this.clearStorage();
    }
}
exports.LocalStorageHandler = LocalStorageHandler;
//# sourceMappingURL=LocalStorageHandler.js.map