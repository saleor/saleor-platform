"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataErrorCheckoutTypes = exports.FunctionErrorCheckoutTypes = void 0;
var FunctionErrorCheckoutTypes;
(function (FunctionErrorCheckoutTypes) {
    FunctionErrorCheckoutTypes[FunctionErrorCheckoutTypes["SHIPPING_ADDRESS_NOT_SET"] = 0] = "SHIPPING_ADDRESS_NOT_SET";
    FunctionErrorCheckoutTypes[FunctionErrorCheckoutTypes["ITEMS_NOT_ADDED_TO_CART"] = 1] = "ITEMS_NOT_ADDED_TO_CART";
    FunctionErrorCheckoutTypes[FunctionErrorCheckoutTypes["EMAIL_NOT_SET"] = 2] = "EMAIL_NOT_SET";
})(FunctionErrorCheckoutTypes = exports.FunctionErrorCheckoutTypes || (exports.FunctionErrorCheckoutTypes = {}));
var DataErrorCheckoutTypes;
(function (DataErrorCheckoutTypes) {
    DataErrorCheckoutTypes[DataErrorCheckoutTypes["SET_SHIPPING_ADDRESS"] = 0] = "SET_SHIPPING_ADDRESS";
    DataErrorCheckoutTypes[DataErrorCheckoutTypes["SET_BILLING_ADDRESS"] = 1] = "SET_BILLING_ADDRESS";
    DataErrorCheckoutTypes[DataErrorCheckoutTypes["SET_SHIPPING_METHOD"] = 2] = "SET_SHIPPING_METHOD";
    DataErrorCheckoutTypes[DataErrorCheckoutTypes["ADD_PROMO_CODE"] = 3] = "ADD_PROMO_CODE";
    DataErrorCheckoutTypes[DataErrorCheckoutTypes["REMOVE_PROMO_CODE"] = 4] = "REMOVE_PROMO_CODE";
    DataErrorCheckoutTypes[DataErrorCheckoutTypes["CREATE_PAYMENT"] = 5] = "CREATE_PAYMENT";
    DataErrorCheckoutTypes[DataErrorCheckoutTypes["COMPLETE_CHECKOUT"] = 6] = "COMPLETE_CHECKOUT";
    DataErrorCheckoutTypes[DataErrorCheckoutTypes["GET_CHECKOUT"] = 7] = "GET_CHECKOUT";
    DataErrorCheckoutTypes[DataErrorCheckoutTypes["GET_PAYMENT_GATEWAYS"] = 8] = "GET_PAYMENT_GATEWAYS";
})(DataErrorCheckoutTypes = exports.DataErrorCheckoutTypes || (exports.DataErrorCheckoutTypes = {}));
//# sourceMappingURL=types.js.map