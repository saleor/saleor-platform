import { ApolloError } from "apollo-client";
import { ICheckoutAddress } from "../../helpers/LocalStorageHandler";
export declare enum PendingSaveItems {
    UPDATE_CART = "updateCart",
    BILLING_ADDRESS = "billingAddress",
    SHIPPING_ADDRESS = "shippingAddress",
    SHIPPING_AS_BILLING_ADDRESS = "shippingAsBillingAddress"
}
export interface ApolloErrorWithUserInput extends ApolloError {
    extraInfo: {
        userInputErrors?: any[];
    };
}
export interface IApolloClientManagerResponse<T> {
    data?: T;
    error?: ApolloErrorWithUserInput;
}
export interface VerifySignInTokenInput {
    token: string;
}
export interface RefreshSignInTokenInput {
    csrfToken?: string | null;
    refreshToken?: string;
}
export interface CreatePaymentInput {
    amount: number;
    checkoutId: string;
    gateway: string;
    billingAddress: ICheckoutAddress;
    token?: string;
    returnUrl?: string;
}
export interface CompleteCheckoutInput {
    checkoutId: string;
    paymentData?: object;
    redirectUrl?: string;
    storeSource?: boolean;
}
