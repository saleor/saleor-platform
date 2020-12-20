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
exports.SaleorCartAPI = void 0;
const helpers_1 = require("../../helpers");
const Cart_1 = require("../../jobs/Cart");
const types_1 = require("../../state/types");
const utils_1 = require("./utils");
class SaleorCartAPI extends helpers_1.ErrorListener {
    constructor(localStorageManager, apolloClientManager, saleorState, jobsManager) {
        super();
        this.addItem = (variantId, quantity) => __awaiter(this, void 0, void 0, function* () {
            var _a, _b;
            // 1. save in local storage
            this.localStorageManager.addItemToCart(variantId, quantity);
            // 2. save online if possible (if checkout id available)
            if ((_a = this.saleorState.checkout) === null || _a === void 0 ? void 0 : _a.lines) {
                const { data, error, } = yield this.apolloClientManager.getRefreshedCheckoutLines(this.saleorState.checkout.lines);
                if (error) {
                    this.fireError(error, Cart_1.ErrorCartTypes.SET_CART_ITEM);
                }
                else {
                    this.localStorageManager.getHandler().setCheckout(Object.assign(Object.assign({}, this.saleorState.checkout), { lines: data }));
                }
            }
            if ((_b = this.saleorState.checkout) === null || _b === void 0 ? void 0 : _b.id) {
                this.jobsManager.addToQueue("cart", "setCartItem");
                return {
                    pending: true,
                };
            }
            return {
                pending: false,
            };
        });
        this.removeItem = (variantId) => __awaiter(this, void 0, void 0, function* () {
            var _c, _d;
            // 1. save in local storage
            this.localStorageManager.removeItemFromCart(variantId);
            // 2. save online if possible (if checkout id available)
            if ((_c = this.saleorState.checkout) === null || _c === void 0 ? void 0 : _c.lines) {
                const { data, error, } = yield this.apolloClientManager.getRefreshedCheckoutLines(this.saleorState.checkout.lines);
                if (error) {
                    this.fireError(error, Cart_1.ErrorCartTypes.SET_CART_ITEM);
                }
                else {
                    this.localStorageManager.getHandler().setCheckout(Object.assign(Object.assign({}, this.saleorState.checkout), { lines: data }));
                }
            }
            if ((_d = this.saleorState.checkout) === null || _d === void 0 ? void 0 : _d.id) {
                this.jobsManager.addToQueue("cart", "setCartItem");
                return {
                    pending: true,
                };
            }
            return {
                pending: false,
            };
        });
        this.subtractItem = (variantId) => __awaiter(this, void 0, void 0, function* () {
            var _e, _f;
            // 1. save in local storage
            this.localStorageManager.subtractItemFromCart(variantId);
            // 2. save online if possible (if checkout id available)
            if ((_e = this.saleorState.checkout) === null || _e === void 0 ? void 0 : _e.lines) {
                const { data, error, } = yield this.apolloClientManager.getRefreshedCheckoutLines(this.saleorState.checkout.lines);
                if (error) {
                    this.fireError(error, Cart_1.ErrorCartTypes.SET_CART_ITEM);
                }
                else {
                    this.localStorageManager.getHandler().setCheckout(Object.assign(Object.assign({}, this.saleorState.checkout), { lines: data }));
                }
            }
            if ((_f = this.saleorState.checkout) === null || _f === void 0 ? void 0 : _f.id) {
                this.jobsManager.addToQueue("cart", "setCartItem");
                return {
                    pending: true,
                };
            }
            return {
                pending: false,
            };
        });
        this.updateItem = (variantId, quantity) => __awaiter(this, void 0, void 0, function* () {
            var _g, _h;
            // 1. save in local storage
            this.localStorageManager.updateItemInCart(variantId, quantity);
            // 2. save online if possible (if checkout id available)
            if ((_g = this.saleorState.checkout) === null || _g === void 0 ? void 0 : _g.lines) {
                const { data, error, } = yield this.apolloClientManager.getRefreshedCheckoutLines(this.saleorState.checkout.lines);
                if (error) {
                    this.fireError(error, Cart_1.ErrorCartTypes.SET_CART_ITEM);
                }
                else {
                    this.localStorageManager.getHandler().setCheckout(Object.assign(Object.assign({}, this.saleorState.checkout), { lines: data }));
                }
            }
            if ((_h = this.saleorState.checkout) === null || _h === void 0 ? void 0 : _h.id) {
                this.jobsManager.addToQueue("cart", "setCartItem");
                return {
                    pending: true,
                };
            }
            return {
                pending: false,
            };
        });
        this.saleorState = saleorState;
        this.localStorageManager = localStorageManager;
        this.apolloClientManager = apolloClientManager;
        this.jobsManager = jobsManager;
        this.loaded = false;
        this.jobsManager.attachErrorListener("cart", this.fireError);
        this.saleorState.subscribeToChange(types_1.StateItems.CHECKOUT, (checkout) => {
            var _a;
            this.items = (_a = checkout === null || checkout === void 0 ? void 0 : checkout.lines) === null || _a === void 0 ? void 0 : _a.filter(line => line.quantity > 0).sort(utils_1.sortCheckoutLines);
        });
        this.saleorState.subscribeToChange(types_1.StateItems.SUMMARY_PRICES, (summaryPrices) => {
            const { totalPrice, subtotalPrice, shippingPrice, discount } = summaryPrices || {};
            this.totalPrice = totalPrice;
            this.subtotalPrice = subtotalPrice;
            this.shippingPrice = shippingPrice;
            this.discount = discount;
        });
        this.saleorState.subscribeToChange(types_1.StateItems.LOADED, (loaded) => {
            this.loaded = loaded.checkout && loaded.summaryPrices;
        });
    }
}
exports.SaleorCartAPI = SaleorCartAPI;
//# sourceMappingURL=index.js.map