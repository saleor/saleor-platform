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
exports.CartQueuedJobs = exports.ErrorCartTypes = void 0;
const LocalStorageHandler_1 = require("../../helpers/LocalStorageHandler");
const QueuedJobsHandler_1 = require("../QueuedJobsHandler");
var ErrorCartTypes;
(function (ErrorCartTypes) {
    ErrorCartTypes[ErrorCartTypes["SET_CART_ITEM"] = 0] = "SET_CART_ITEM";
})(ErrorCartTypes = exports.ErrorCartTypes || (exports.ErrorCartTypes = {}));
class CartQueuedJobs extends QueuedJobsHandler_1.QueuedJobsHandler {
    constructor(localStorageHandler, apolloClientManager) {
        super();
        this.setCartItem = () => __awaiter(this, void 0, void 0, function* () {
            const checkout = LocalStorageHandler_1.LocalStorageHandler.getCheckout();
            if (checkout) {
                const { data, error } = yield this.apolloClientManager.setCartItem(checkout);
                if (error && this.onErrorListener) {
                    this.onErrorListener(error, ErrorCartTypes.SET_CART_ITEM);
                }
                else if (data) {
                    this.localStorageHandler.setCheckout(Object.assign(Object.assign({}, checkout), { availablePaymentGateways: data.availablePaymentGateways, availableShippingMethods: data.availableShippingMethods, lines: data.lines, promoCodeDiscount: data.promoCodeDiscount, shippingMethod: data.shippingMethod }));
                }
            }
        });
        this.localStorageHandler = localStorageHandler;
        this.apolloClientManager = apolloClientManager;
    }
}
exports.CartQueuedJobs = CartQueuedJobs;
//# sourceMappingURL=CartQueuedJobs.js.map