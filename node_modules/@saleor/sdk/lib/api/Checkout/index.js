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
exports.SaleorCheckoutAPI = void 0;
const helpers_1 = require("../../helpers");
const types_1 = require("../../state/types");
const types_2 = require("./types");
class SaleorCheckoutAPI extends helpers_1.ErrorListener {
    constructor(saleorState, jobsManager) {
        super();
        this.setShippingAddress = (shippingAddress, email) => __awaiter(this, void 0, void 0, function* () {
            var _a, _b, _c;
            const checkoutId = (_a = this.saleorState.checkout) === null || _a === void 0 ? void 0 : _a.id;
            const alteredLines = (_c = (_b = this.saleorState.checkout) === null || _b === void 0 ? void 0 : _b.lines) === null || _c === void 0 ? void 0 : _c.map(item => ({
                quantity: item.quantity,
                variantId: item === null || item === void 0 ? void 0 : item.variant.id,
            }));
            if (alteredLines && checkoutId) {
                const { data, dataError } = yield this.jobsManager.run("checkout", "setShippingAddress", {
                    checkoutId,
                    email,
                    selectedShippingAddressId: shippingAddress.id,
                    shippingAddress,
                });
                return {
                    data,
                    dataError,
                    pending: false,
                };
            }
            if (alteredLines) {
                const { data, dataError } = yield this.jobsManager.run("checkout", "createCheckout", {
                    email,
                    lines: alteredLines,
                    selectedShippingAddressId: shippingAddress.id,
                    shippingAddress,
                });
                return {
                    data,
                    dataError,
                    pending: false,
                };
            }
            return {
                functionError: {
                    error: new Error("You need to add items to cart before setting shipping address."),
                    type: types_2.FunctionErrorCheckoutTypes.ITEMS_NOT_ADDED_TO_CART,
                },
                pending: false,
            };
        });
        this.setBillingAddress = (billingAddress, email) => __awaiter(this, void 0, void 0, function* () {
            var _d, _e, _f, _g, _h, _j;
            const checkoutId = (_d = this.saleorState.checkout) === null || _d === void 0 ? void 0 : _d.id;
            const isShippingRequiredForProducts = (_f = (_e = this.saleorState.checkout) === null || _e === void 0 ? void 0 : _e.lines) === null || _f === void 0 ? void 0 : _f.filter(line => line.quantity > 0).some(({ variant }) => { var _a; return (_a = variant.product) === null || _a === void 0 ? void 0 : _a.productType.isShippingRequired; });
            const alteredLines = (_h = (_g = this.saleorState.checkout) === null || _g === void 0 ? void 0 : _g.lines) === null || _h === void 0 ? void 0 : _h.map(item => ({
                quantity: item.quantity,
                variantId: item === null || item === void 0 ? void 0 : item.variant.id,
            }));
            if (isShippingRequiredForProducts &&
                checkoutId && ((_j = this.checkout) === null || _j === void 0 ? void 0 : _j.shippingAddress)) {
                const { data, dataError } = yield this.jobsManager.run("checkout", "setBillingAddress", {
                    billingAddress,
                    billingAsShipping: false,
                    checkoutId,
                    selectedBillingAddressId: billingAddress.id,
                });
                return {
                    data,
                    dataError,
                    pending: false,
                };
            }
            if (isShippingRequiredForProducts) {
                return {
                    functionError: {
                        error: new Error("You need to set shipping address before setting billing address."),
                        type: types_2.FunctionErrorCheckoutTypes.SHIPPING_ADDRESS_NOT_SET,
                    },
                    pending: false,
                };
            }
            if (!isShippingRequiredForProducts && email && checkoutId && alteredLines) {
                const { data, dataError } = yield this.jobsManager.run("checkout", "setBillingAddressWithEmail", {
                    billingAddress,
                    checkoutId,
                    email,
                    selectedBillingAddressId: billingAddress.id,
                });
                return {
                    data,
                    dataError,
                    pending: false,
                };
            }
            if (!isShippingRequiredForProducts && email && alteredLines) {
                const { data, dataError } = yield this.jobsManager.run("checkout", "createCheckout", {
                    billingAddress,
                    email,
                    lines: alteredLines,
                    selectedBillingAddressId: billingAddress.id,
                });
                return {
                    data,
                    dataError,
                    pending: false,
                };
            }
            if (!isShippingRequiredForProducts && !email) {
                return {
                    functionError: {
                        error: new Error("You need to provide email when products do not require shipping before setting billing address."),
                        type: types_2.FunctionErrorCheckoutTypes.EMAIL_NOT_SET,
                    },
                    pending: false,
                };
            }
            return {
                functionError: {
                    error: new Error("You need to add items to cart before setting billing address."),
                    type: types_2.FunctionErrorCheckoutTypes.ITEMS_NOT_ADDED_TO_CART,
                },
                pending: false,
            };
        });
        this.setBillingAsShippingAddress = () => __awaiter(this, void 0, void 0, function* () {
            var _k, _l, _m;
            const checkoutId = (_k = this.saleorState.checkout) === null || _k === void 0 ? void 0 : _k.id;
            if (checkoutId && ((_l = this.checkout) === null || _l === void 0 ? void 0 : _l.shippingAddress)) {
                const { data, dataError } = yield this.jobsManager.run("checkout", "setBillingAddress", {
                    billingAddress: this.checkout.shippingAddress,
                    billingAsShipping: true,
                    checkoutId,
                    selectedBillingAddressId: (_m = this.checkout) === null || _m === void 0 ? void 0 : _m.shippingAddress.id,
                });
                return {
                    data,
                    dataError,
                    pending: false,
                };
            }
            return {
                functionError: {
                    error: new Error("You need to set shipping address before setting billing address."),
                    type: types_2.FunctionErrorCheckoutTypes.SHIPPING_ADDRESS_NOT_SET,
                },
                pending: false,
            };
        });
        this.setShippingMethod = (shippingMethodId) => __awaiter(this, void 0, void 0, function* () {
            var _o;
            const checkoutId = (_o = this.saleorState.checkout) === null || _o === void 0 ? void 0 : _o.id;
            if (checkoutId) {
                const { data, dataError } = yield this.jobsManager.run("checkout", "setShippingMethod", {
                    checkoutId,
                    shippingMethodId,
                });
                return {
                    data,
                    dataError,
                    pending: false,
                };
            }
            return {
                functionError: {
                    error: new Error("You need to set shipping address before setting shipping method."),
                    type: types_2.FunctionErrorCheckoutTypes.SHIPPING_ADDRESS_NOT_SET,
                },
                pending: false,
            };
        });
        this.addPromoCode = (promoCode) => __awaiter(this, void 0, void 0, function* () {
            var _p;
            const checkoutId = (_p = this.saleorState.checkout) === null || _p === void 0 ? void 0 : _p.id;
            if (checkoutId) {
                const { data, dataError } = yield this.jobsManager.run("checkout", "addPromoCode", {
                    checkoutId,
                    promoCode,
                });
                return {
                    data,
                    dataError,
                    pending: false,
                };
            }
            return {
                functionError: {
                    error: new Error("You need to set shipping address before modifying promo code."),
                    type: types_2.FunctionErrorCheckoutTypes.SHIPPING_ADDRESS_NOT_SET,
                },
                pending: false,
            };
        });
        this.removePromoCode = (promoCode) => __awaiter(this, void 0, void 0, function* () {
            var _q;
            const checkoutId = (_q = this.saleorState.checkout) === null || _q === void 0 ? void 0 : _q.id;
            if (checkoutId) {
                const { data, dataError } = yield this.jobsManager.run("checkout", "removePromoCode", { checkoutId, promoCode });
                return {
                    data,
                    dataError,
                    pending: false,
                };
            }
            return {
                functionError: {
                    error: new Error("You need to set shipping address before modifying promo code."),
                    type: types_2.FunctionErrorCheckoutTypes.SHIPPING_ADDRESS_NOT_SET,
                },
                pending: false,
            };
        });
        this.createPayment = (input) => __awaiter(this, void 0, void 0, function* () {
            var _r, _s, _t, _u;
            const checkoutId = (_r = this.saleorState.checkout) === null || _r === void 0 ? void 0 : _r.id;
            const billingAddress = (_s = this.saleorState.checkout) === null || _s === void 0 ? void 0 : _s.billingAddress;
            const amount = (_u = (_t = this.saleorState.summaryPrices) === null || _t === void 0 ? void 0 : _t.totalPrice) === null || _u === void 0 ? void 0 : _u.gross.amount;
            if (checkoutId &&
                billingAddress &&
                amount !== null &&
                amount !== undefined) {
                const { data, dataError } = yield this.jobsManager.run("checkout", "createPayment", Object.assign(Object.assign({}, input), { amount,
                    billingAddress,
                    checkoutId }));
                return {
                    data,
                    dataError,
                    pending: false,
                };
            }
            return {
                functionError: {
                    error: new Error("You need to set billing address before creating payment."),
                    type: types_2.FunctionErrorCheckoutTypes.SHIPPING_ADDRESS_NOT_SET,
                },
                pending: false,
            };
        });
        this.completeCheckout = (input) => __awaiter(this, void 0, void 0, function* () {
            var _v;
            const checkoutId = (_v = this.saleorState.checkout) === null || _v === void 0 ? void 0 : _v.id;
            if (checkoutId) {
                const { data, dataError } = yield this.jobsManager.run("checkout", "completeCheckout", Object.assign(Object.assign({}, input), { checkoutId }));
                return {
                    data,
                    dataError,
                    pending: false,
                };
            }
            return {
                functionError: {
                    error: new Error("You need to set shipping address before creating payment."),
                    type: types_2.FunctionErrorCheckoutTypes.SHIPPING_ADDRESS_NOT_SET,
                },
                pending: false,
            };
        });
        this.saleorState = saleorState;
        this.jobsManager = jobsManager;
        this.loaded = false;
        this.saleorState.subscribeToChange(types_1.StateItems.CHECKOUT, (checkout) => {
            const { id, token, email, shippingAddress, billingAddress, selectedShippingAddressId, selectedBillingAddressId, billingAsShipping, availablePaymentGateways, availableShippingMethods, shippingMethod, promoCodeDiscount, } = checkout || {};
            this.checkout = {
                billingAddress,
                email,
                id,
                shippingAddress,
                shippingMethod,
                token,
            };
            this.selectedShippingAddressId = selectedShippingAddressId;
            this.selectedBillingAddressId = selectedBillingAddressId;
            this.availablePaymentGateways = availablePaymentGateways;
            this.availableShippingMethods = availableShippingMethods;
            this.billingAsShipping = billingAsShipping;
            this.promoCodeDiscount = {
                discountName: promoCodeDiscount === null || promoCodeDiscount === void 0 ? void 0 : promoCodeDiscount.discountName,
                voucherCode: promoCodeDiscount === null || promoCodeDiscount === void 0 ? void 0 : promoCodeDiscount.voucherCode,
            };
        });
        this.saleorState.subscribeToChange(types_1.StateItems.PAYMENT, (payment) => {
            const { id, token, gateway, creditCard, total } = payment || {};
            this.payment = {
                creditCard,
                gateway,
                id,
                token,
                total,
            };
        });
        this.saleorState.subscribeToChange(types_1.StateItems.LOADED, (loaded) => {
            this.loaded = loaded.checkout && loaded.payment;
        });
    }
}
exports.SaleorCheckoutAPI = SaleorCheckoutAPI;
//# sourceMappingURL=index.js.map