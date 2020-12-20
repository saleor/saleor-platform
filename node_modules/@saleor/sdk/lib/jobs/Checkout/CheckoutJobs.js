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
const types_1 = require("../../api/Checkout/types");
const LocalStorageHandler_1 = require("../../helpers/LocalStorageHandler");
const JobsHandler_1 = require("../JobsHandler");
class CheckoutJobs extends JobsHandler_1.JobsHandler {
    constructor(localStorageHandler, apolloClientManager) {
        super();
        this.provideCheckout = ({ isUserSignedIn, }) => __awaiter(this, void 0, void 0, function* () {
            const checkout = LocalStorageHandler_1.LocalStorageHandler.getCheckout();
            const { data, error } = yield this.apolloClientManager.getCheckout(isUserSignedIn, checkout === null || checkout === void 0 ? void 0 : checkout.token);
            if (error) {
                return {
                    dataError: {
                        error,
                        type: types_1.DataErrorCheckoutTypes.GET_CHECKOUT,
                    },
                };
            }
            this.localStorageHandler.setCheckout(data || checkout);
            return {
                data,
            };
        });
        this.createCheckout = ({ email, lines, shippingAddress, selectedShippingAddressId, billingAddress, selectedBillingAddressId, }) => __awaiter(this, void 0, void 0, function* () {
            const { data, error } = yield this.apolloClientManager.createCheckout(email, lines, shippingAddress, billingAddress);
            if (error) {
                /**
                 * TODO: Differentiate errors!!! THIS IS A BUG!!!
                 * DataErrorCheckoutTypes.SET_SHIPPING_ADDRESS is just one of every possible - instead of deprecated errors, checkoutErrors should be used.
                 */
                return {
                    dataError: {
                        error,
                        type: types_1.DataErrorCheckoutTypes.SET_SHIPPING_ADDRESS,
                    },
                };
            }
            this.localStorageHandler.setCheckout(Object.assign(Object.assign({}, data), { selectedBillingAddressId,
                selectedShippingAddressId }));
            return {
                data,
            };
        });
        this.setShippingAddress = ({ checkoutId, shippingAddress, email, selectedShippingAddressId, }) => __awaiter(this, void 0, void 0, function* () {
            const checkout = LocalStorageHandler_1.LocalStorageHandler.getCheckout();
            const { data, error } = yield this.apolloClientManager.setShippingAddress(shippingAddress, email, checkoutId);
            if (error) {
                return {
                    dataError: {
                        error,
                        type: types_1.DataErrorCheckoutTypes.SET_SHIPPING_ADDRESS,
                    },
                };
            }
            this.localStorageHandler.setCheckout(Object.assign(Object.assign({}, checkout), { availableShippingMethods: data === null || data === void 0 ? void 0 : data.availableShippingMethods, billingAsShipping: false, email: data === null || data === void 0 ? void 0 : data.email, selectedShippingAddressId, shippingAddress: data === null || data === void 0 ? void 0 : data.shippingAddress }));
            return { data };
        });
        this.setBillingAddress = ({ checkoutId, billingAddress, billingAsShipping, selectedBillingAddressId, }) => __awaiter(this, void 0, void 0, function* () {
            const checkout = LocalStorageHandler_1.LocalStorageHandler.getCheckout();
            const { data, error } = yield this.apolloClientManager.setBillingAddress(billingAddress, checkoutId);
            if (error) {
                return {
                    dataError: {
                        error,
                        type: types_1.DataErrorCheckoutTypes.SET_BILLING_ADDRESS,
                    },
                };
            }
            this.localStorageHandler.setCheckout(Object.assign(Object.assign({}, checkout), { availablePaymentGateways: data === null || data === void 0 ? void 0 : data.availablePaymentGateways, billingAddress: data === null || data === void 0 ? void 0 : data.billingAddress, billingAsShipping: !!billingAsShipping, selectedBillingAddressId }));
            return { data };
        });
        this.setBillingAddressWithEmail = ({ checkoutId, email, billingAddress, selectedBillingAddressId, }) => __awaiter(this, void 0, void 0, function* () {
            const checkout = LocalStorageHandler_1.LocalStorageHandler.getCheckout();
            const { data, error, } = yield this.apolloClientManager.setBillingAddressWithEmail(billingAddress, email, checkoutId);
            if (error) {
                return {
                    dataError: {
                        error,
                        type: types_1.DataErrorCheckoutTypes.SET_BILLING_ADDRESS,
                    },
                };
            }
            this.localStorageHandler.setCheckout(Object.assign(Object.assign({}, checkout), { availablePaymentGateways: data === null || data === void 0 ? void 0 : data.availablePaymentGateways, billingAddress: data === null || data === void 0 ? void 0 : data.billingAddress, billingAsShipping: false, email: data === null || data === void 0 ? void 0 : data.email, selectedBillingAddressId }));
            return { data };
        });
        this.setShippingMethod = ({ checkoutId, shippingMethodId, }) => __awaiter(this, void 0, void 0, function* () {
            const checkout = LocalStorageHandler_1.LocalStorageHandler.getCheckout();
            const { data, error } = yield this.apolloClientManager.setShippingMethod(shippingMethodId, checkoutId);
            if (error) {
                return {
                    dataError: {
                        error,
                        type: types_1.DataErrorCheckoutTypes.SET_SHIPPING_METHOD,
                    },
                };
            }
            this.localStorageHandler.setCheckout(Object.assign(Object.assign({}, checkout), { promoCodeDiscount: data === null || data === void 0 ? void 0 : data.promoCodeDiscount, shippingMethod: data === null || data === void 0 ? void 0 : data.shippingMethod }));
            return { data };
        });
        this.addPromoCode = ({ checkoutId, promoCode, }) => __awaiter(this, void 0, void 0, function* () {
            const checkout = LocalStorageHandler_1.LocalStorageHandler.getCheckout();
            const { data, error } = yield this.apolloClientManager.addPromoCode(promoCode, checkoutId);
            if (error) {
                return {
                    dataError: {
                        error,
                        type: types_1.DataErrorCheckoutTypes.ADD_PROMO_CODE,
                    },
                };
            }
            this.localStorageHandler.setCheckout(Object.assign(Object.assign({}, checkout), { promoCodeDiscount: data === null || data === void 0 ? void 0 : data.promoCodeDiscount }));
            return { data };
        });
        this.removePromoCode = ({ checkoutId, promoCode, }) => __awaiter(this, void 0, void 0, function* () {
            const checkout = LocalStorageHandler_1.LocalStorageHandler.getCheckout();
            const { data, error } = yield this.apolloClientManager.removePromoCode(promoCode, checkoutId);
            if (error) {
                return {
                    dataError: {
                        error,
                        type: types_1.DataErrorCheckoutTypes.REMOVE_PROMO_CODE,
                    },
                };
            }
            this.localStorageHandler.setCheckout(Object.assign(Object.assign({}, checkout), { promoCodeDiscount: data === null || data === void 0 ? void 0 : data.promoCodeDiscount }));
            return { data };
        });
        this.createPayment = ({ checkoutId, amount, gateway, token, billingAddress, creditCard, returnUrl, }) => __awaiter(this, void 0, void 0, function* () {
            const payment = LocalStorageHandler_1.LocalStorageHandler.getPayment();
            const { data, error } = yield this.apolloClientManager.createPayment({
                amount,
                billingAddress,
                checkoutId,
                gateway,
                returnUrl,
                token,
            });
            if (error) {
                return {
                    dataError: {
                        error,
                        type: types_1.DataErrorCheckoutTypes.CREATE_PAYMENT,
                    },
                };
            }
            this.localStorageHandler.setPayment(Object.assign(Object.assign({}, payment), { creditCard, gateway: data === null || data === void 0 ? void 0 : data.gateway, id: data === null || data === void 0 ? void 0 : data.id, token: data === null || data === void 0 ? void 0 : data.token, total: data === null || data === void 0 ? void 0 : data.total }));
            return { data };
        });
        this.completeCheckout = ({ checkoutId, paymentData, redirectUrl, storeSource, }) => __awaiter(this, void 0, void 0, function* () {
            const { data, error } = yield this.apolloClientManager.completeCheckout({
                checkoutId,
                paymentData,
                redirectUrl,
                storeSource,
            });
            if (error) {
                return {
                    dataError: {
                        error,
                        type: types_1.DataErrorCheckoutTypes.COMPLETE_CHECKOUT,
                    },
                };
            }
            if (!(data === null || data === void 0 ? void 0 : data.confirmationNeeded)) {
                this.localStorageHandler.setCheckout({});
                this.localStorageHandler.setPayment({});
            }
            return { data };
        });
        this.apolloClientManager = apolloClientManager;
        this.localStorageHandler = localStorageHandler;
    }
}
exports.default = CheckoutJobs;
//# sourceMappingURL=CheckoutJobs.js.map