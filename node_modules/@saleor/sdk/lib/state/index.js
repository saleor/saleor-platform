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
exports.SaleorState = void 0;
const lodash_1 = require("lodash");
const helpers_1 = require("../helpers");
const LocalStorageHandler_1 = require("../helpers/LocalStorageHandler");
const types_1 = require("./types");
const Auth_1 = require("../jobs/Auth");
const Auth_2 = require("../api/Auth");
const defaultSaleorStateLoaded = {
    checkout: false,
    payment: false,
    signInToken: false,
    summaryPrices: false,
    user: false,
};
class SaleorState extends helpers_1.NamedObservable {
    constructor(config, localStorageHandler, apolloClientManager, jobsManager) {
        super();
        /**
         * Subscribes to particular changes occuring in data sources like apollo cache or local storage.
         * Every update in data source will result in update of respective class member.
         */
        this.subscribeStateToChanges = () => {
            this.localStorageHandler.subscribeToChange(LocalStorageHandler_1.LocalStorageItems.CHECKOUT, this.onCheckoutUpdate);
            this.localStorageHandler.subscribeToChange(LocalStorageHandler_1.LocalStorageItems.PAYMENT, this.onPaymentUpdate);
            this.localStorageHandler.subscribeToChange(LocalStorageHandler_1.LocalStorageItems.TOKEN, this.onSignInTokenUpdate);
            this.localStorageHandler.subscribeToChange(LocalStorageHandler_1.LocalStorageEvents.CLEAR, this.onClearLocalStorage);
            this.apolloClientManager.subscribeToUserChange(this.onUserUpdate);
            this.jobsManager.attachEventListener("auth", (event, value) => {
                if (event === Auth_1.AuthJobsEvents.SIGN_IN_TOKEN_REFRESHING) {
                    this.onSignInTokenRefreshUpdate(value);
                }
            });
        };
        /**
         * Initialize class members with cached or fetched data.
         */
        this.initializeState = (config) => __awaiter(this, void 0, void 0, function* () {
            /**
             * Before making any fetch, first try to verify token if it exists.
             */
            if (LocalStorageHandler_1.LocalStorageHandler.getSignInToken()) {
                this.onSignInTokenVerifyingUpdate(true);
                yield this.verityToken();
            }
            this.onSignInTokenVerifyingUpdate(false);
            /**
             * Proceed with state initialization.
             */
            if (config.loadOnStart.auth) {
                yield this.jobsManager.run("auth", "provideUser", undefined);
            }
            if (config.loadOnStart.checkout) {
                yield this.jobsManager.run("checkout", "provideCheckout", {
                    isUserSignedIn: !!this.user,
                });
                this.onPaymentUpdate(LocalStorageHandler_1.LocalStorageHandler.getPayment());
            }
        });
        this.verityToken = () => __awaiter(this, void 0, void 0, function* () {
            var _a;
            const { data, dataError } = yield this.jobsManager.run("auth", "verifySignInToken", undefined);
            if (dataError || !(data === null || data === void 0 ? void 0 : data.isValid)) {
                yield this.jobsManager.run("auth", "signOut", undefined);
                try {
                    if ((_a = navigator.credentials) === null || _a === void 0 ? void 0 : _a.preventSilentAccess) {
                        yield navigator.credentials.preventSilentAccess();
                    }
                }
                catch (credentialsError) {
                    // eslint-disable-next-line no-console
                    console.warn(Auth_2.BROWSER_NO_CREDENTIAL_API_MESSAGE, credentialsError);
                }
            }
        });
        this.onLoadedUpdate = (newLoaded) => {
            this.loaded = Object.assign(Object.assign({}, this.loaded), newLoaded);
            this.notifyChange(types_1.StateItems.LOADED, this.loaded);
        };
        this.onClearLocalStorage = () => {
            this.onSignInTokenUpdate(null);
            this.onUserUpdate(null);
            this.onCheckoutUpdate();
            this.onPaymentUpdate();
        };
        this.onSignInTokenUpdate = (token) => {
            this.signInToken = token;
            this.notifyChange(types_1.StateItems.SIGN_IN_TOKEN, this.signInToken);
            this.onLoadedUpdate({
                signInToken: true,
            });
        };
        this.onSignInTokenVerifyingUpdate = (tokenVerifying) => {
            this.signInTokenVerifying = tokenVerifying;
            this.notifyChange(types_1.StateItems.SIGN_IN_TOKEN_VERIFYING, this.signInTokenVerifying);
        };
        this.onSignInTokenRefreshUpdate = (tokenRefreshing) => {
            this.signInTokenRefreshing = tokenRefreshing;
            this.notifyChange(types_1.StateItems.SIGN_IN_TOKEN_REFRESHING, this.signInTokenRefreshing);
        };
        this.onUserUpdate = (user) => {
            this.user = user;
            this.notifyChange(types_1.StateItems.USER, this.user);
            this.onLoadedUpdate({
                user: true,
            });
        };
        this.onCheckoutUpdate = (checkout) => {
            this.checkout = checkout;
            this.summaryPrices = SaleorState.calculateSummaryPrices(checkout);
            this.notifyChange(types_1.StateItems.CHECKOUT, this.checkout);
            this.notifyChange(types_1.StateItems.SUMMARY_PRICES, this.summaryPrices);
            this.onLoadedUpdate({
                checkout: true,
                summaryPrices: true,
            });
        };
        this.onPaymentUpdate = (payment) => {
            this.payment = payment;
            this.notifyChange(types_1.StateItems.PAYMENT, this.payment);
            this.onLoadedUpdate({
                payment: true,
            });
        };
        this.localStorageHandler = localStorageHandler;
        this.apolloClientManager = apolloClientManager;
        this.jobsManager = jobsManager;
        this.loaded = defaultSaleorStateLoaded;
        this.onSignInTokenUpdate(LocalStorageHandler_1.LocalStorageHandler.getSignInToken());
        this.subscribeStateToChanges();
        this.initializeState(config);
    }
    static calculateSummaryPrices(checkout) {
        var _a, _b, _c;
        const items = checkout === null || checkout === void 0 ? void 0 : checkout.lines;
        const shippingMethod = checkout === null || checkout === void 0 ? void 0 : checkout.shippingMethod;
        const promoCodeDiscount = (_a = checkout === null || checkout === void 0 ? void 0 : checkout.promoCodeDiscount) === null || _a === void 0 ? void 0 : _a.discount;
        if (items && items.length) {
            const firstItemTotalPrice = items[0].totalPrice;
            if (firstItemTotalPrice) {
                const shippingPrice = Object.assign(Object.assign({}, shippingMethod === null || shippingMethod === void 0 ? void 0 : shippingMethod.price), { amount: ((_b = shippingMethod === null || shippingMethod === void 0 ? void 0 : shippingMethod.price) === null || _b === void 0 ? void 0 : _b.amount) || 0, currency: ((_c = shippingMethod === null || shippingMethod === void 0 ? void 0 : shippingMethod.price) === null || _c === void 0 ? void 0 : _c.currency) ||
                        firstItemTotalPrice.gross.currency });
                const itemsNetPrice = items.reduce((accumulatorPrice, line) => { var _a; return accumulatorPrice + (((_a = line.totalPrice) === null || _a === void 0 ? void 0 : _a.net.amount) || 0); }, 0);
                const itemsGrossPrice = items.reduce((accumulatorPrice, line) => { var _a, _b; return accumulatorPrice + (((_b = (_a = line.totalPrice) === null || _a === void 0 ? void 0 : _a.gross) === null || _b === void 0 ? void 0 : _b.amount) || 0); }, 0);
                const subtotalPrice = Object.assign(Object.assign({}, firstItemTotalPrice), { gross: Object.assign(Object.assign({}, firstItemTotalPrice.gross), { amount: lodash_1.round(itemsGrossPrice, 2) }), net: Object.assign(Object.assign({}, firstItemTotalPrice.net), { amount: lodash_1.round(itemsNetPrice, 2) }) });
                const discount = Object.assign(Object.assign({}, promoCodeDiscount), { amount: (promoCodeDiscount === null || promoCodeDiscount === void 0 ? void 0 : promoCodeDiscount.amount) || 0, currency: (promoCodeDiscount === null || promoCodeDiscount === void 0 ? void 0 : promoCodeDiscount.currency) || firstItemTotalPrice.gross.currency });
                const totalPrice = Object.assign(Object.assign({}, subtotalPrice), { gross: Object.assign(Object.assign({}, subtotalPrice.gross), { amount: lodash_1.round(itemsGrossPrice + shippingPrice.amount - discount.amount, 2) }), net: Object.assign(Object.assign({}, subtotalPrice.net), { amount: lodash_1.round(itemsNetPrice + shippingPrice.amount - discount.amount, 2) }) });
                return {
                    discount,
                    shippingPrice,
                    subtotalPrice,
                    totalPrice,
                };
            }
        }
        return {};
    }
}
exports.SaleorState = SaleorState;
//# sourceMappingURL=index.js.map