import { Checkout_availableShippingMethods } from "../../fragments/gqlTypes/Checkout";
import { Payment_total } from "../../fragments/gqlTypes/Payment";
import { ICheckoutModelPrice, ICheckoutModelPriceValue, IPaymentCreditCard } from "../../helpers/LocalStorageHandler";
export declare type IPrice = ICheckoutModelPrice | null | undefined;
export declare type IPriceValue = ICheckoutModelPriceValue | null | undefined;
export interface IAddress {
    id?: string;
    firstName?: string;
    lastName?: string;
    companyName?: string;
    streetAddress1?: string;
    streetAddress2?: string;
    city?: string;
    postalCode?: string;
    countryArea?: string;
    phone?: string | null;
    country?: {
        code?: string;
        country?: string;
    };
}
export declare type IAvailableShippingMethods = Checkout_availableShippingMethods[];
export interface IShippingMethod {
    id: string;
    name: string;
    price?: IPriceValue | null;
}
export interface IPromoCodeDiscount {
    voucherCode?: string | null;
    discountName?: string | null;
}
export declare type ICreditCard = IPaymentCreditCard;
export interface IPayment {
    id?: string;
    token?: string;
    gateway?: string;
    creditCard?: ICreditCard | null;
    total?: Payment_total | null;
}
export interface ICheckout {
    id?: string;
    token: any;
    email?: string;
    shippingAddress?: IAddress | null;
    shippingMethod?: IShippingMethod | null;
    billingAddress?: IAddress | null;
}
export declare enum FunctionErrorCheckoutTypes {
    "SHIPPING_ADDRESS_NOT_SET" = 0,
    "ITEMS_NOT_ADDED_TO_CART" = 1,
    "EMAIL_NOT_SET" = 2
}
export declare enum DataErrorCheckoutTypes {
    "SET_SHIPPING_ADDRESS" = 0,
    "SET_BILLING_ADDRESS" = 1,
    "SET_SHIPPING_METHOD" = 2,
    "ADD_PROMO_CODE" = 3,
    "REMOVE_PROMO_CODE" = 4,
    "CREATE_PAYMENT" = 5,
    "COMPLETE_CHECKOUT" = 6,
    "GET_CHECKOUT" = 7,
    "GET_PAYMENT_GATEWAYS" = 8
}
export interface CreatePaymentInput {
    gateway: string;
    token?: string;
    creditCard?: ICreditCard;
    returnUrl?: string;
}
export interface CompleteCheckoutInput {
    paymentData?: object;
    redirectUrl?: string;
    storeSource?: boolean;
}
