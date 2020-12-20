import { ICheckoutModelPrice, ICheckoutModelPriceValue } from "../helpers/LocalStorageHandler";
export declare enum StateItems {
    LOADED = 0,
    USER = 1,
    SIGN_IN_TOKEN = 2,
    SIGN_IN_TOKEN_REFRESHING = 3,
    SIGN_IN_TOKEN_VERIFYING = 4,
    CHECKOUT = 5,
    SUMMARY_PRICES = 6,
    PROMO_CODE = 7,
    PAYMENT = 8
}
export interface ISaleorStateSummeryPrices {
    shippingPrice?: ICheckoutModelPriceValue;
    subtotalPrice?: ICheckoutModelPrice;
    totalPrice?: ICheckoutModelPrice;
    discount?: ICheckoutModelPriceValue;
}
