import ApolloClient from "apollo-client";
import { User } from "../../fragments/gqlTypes/User";
import { ICheckoutAddress, ICheckoutModel, ICheckoutModelLine, IPaymentModel } from "../../helpers/LocalStorageHandler";
import { CreatePaymentInput, CompleteCheckoutInput, VerifySignInTokenInput, RefreshSignInTokenInput } from "./types";
export declare class ApolloClientManager {
    private client;
    constructor(client: ApolloClient<any>);
    subscribeToUserChange: (next: (value: User | null) => void, error?: ((error: any) => void) | undefined, complete?: (() => void) | undefined) => void;
    getUser: () => Promise<{
        error: readonly import("graphql").GraphQLError[];
        data?: undefined;
    } | {
        data: import("../../queries/gqlTypes/UserDetails").UserDetails_me | null;
        error?: undefined;
    }>;
    registerAccount: (email: string, password: string, redirectUrl: string) => Promise<{
        error: readonly import("graphql").GraphQLError[];
        data?: undefined;
    } | {
        error: import("../../mutations/gqlTypes/RegisterAccount").RegisterAccount_accountRegister_accountErrors[];
        data?: undefined;
    } | {
        data: {
            requiresConfirmation: boolean | null | undefined;
        };
        error?: undefined;
    }>;
    resetPasswordRequest: (email: string, redirectUrl: string) => Promise<{
        error: readonly import("graphql").GraphQLError[];
    } | {
        error: import("../../mutations/gqlTypes/ResetPasswordRequest").ResetPasswordRequest_requestPasswordReset_accountErrors[];
    } | {
        error?: undefined;
    }>;
    signIn: (email: string, password: string) => Promise<{
        error: readonly import("graphql").GraphQLError[];
        data?: undefined;
    } | {
        error: import("../../mutations/gqlTypes/TokenAuth").TokenAuth_tokenCreate_errors[];
        data?: undefined;
    } | {
        data: {
            csrfToken: string | null | undefined;
            token: string | null | undefined;
            user: import("../../mutations/gqlTypes/TokenAuth").TokenAuth_tokenCreate_user | null | undefined;
        };
        error?: undefined;
    }>;
    signOut: () => Promise<void>;
    verifySignInToken: ({ token }: VerifySignInTokenInput) => Promise<{
        error: readonly import("graphql").GraphQLError[];
        data?: undefined;
    } | {
        error: import("../../mutations/gqlTypes/VerifyToken").VerifyToken_tokenVerify_errors[];
        data?: undefined;
    } | {
        data: {
            isValid: boolean | undefined;
            payload: any;
            user: import("../../mutations/gqlTypes/VerifyToken").VerifyToken_tokenVerify_user | null | undefined;
        };
        error?: undefined;
    }>;
    refreshSignInToken: ({ csrfToken, refreshToken, }: RefreshSignInTokenInput) => Promise<{
        error: readonly import("graphql").GraphQLError[];
        data?: undefined;
    } | {
        error: import("../../mutations/gqlTypes/RefreshToken").RefreshToken_tokenRefresh_errors[];
        data?: undefined;
    } | {
        data: {
            token: string | null | undefined;
            user: import("../../mutations/gqlTypes/RefreshToken").RefreshToken_tokenRefresh_user | null | undefined;
        };
        error?: undefined;
    }>;
    getCheckout: (isUserSignedIn: boolean, checkoutToken: string | null) => Promise<{
        data: ICheckoutModel;
        error?: undefined;
    } | {
        error: any;
        data?: undefined;
    } | {
        data?: undefined;
        error?: undefined;
    }>;
    getRefreshedCheckoutLines: (checkoutlines: ICheckoutModelLine[] | null) => Promise<{
        error: any;
        data?: undefined;
    } | {
        data: {
            id: string | undefined;
            quantity: number;
            totalPrice: {
                gross: {
                    amount: number;
                    __typename: "Money";
                    currency: string;
                };
                net: {
                    amount: number;
                    __typename: "Money";
                    currency: string;
                };
            } | null;
            variant: import("../../helpers/LocalStorageHandler").ICheckoutModelLineVariant;
        }[];
        error?: undefined;
    }>;
    createCheckout: (email: string, lines: Array<{
        variantId: string;
        quantity: number;
    }>, shippingAddress?: ICheckoutAddress | undefined, billingAddress?: ICheckoutAddress | undefined) => Promise<{
        data: ICheckoutModel;
        error?: undefined;
    } | {
        error: any;
        data?: undefined;
    } | {
        data?: undefined;
        error?: undefined;
    }>;
    setCartItem: (checkout: ICheckoutModel) => Promise<{
        data: ICheckoutModel;
        error?: undefined;
    } | {
        error: any;
        data?: undefined;
    } | {
        data?: undefined;
        error?: undefined;
    }>;
    setShippingAddress: (shippingAddress: ICheckoutAddress, email: string, checkoutId: string) => Promise<{
        data: ICheckoutModel;
        error?: undefined;
    } | {
        data?: undefined;
        error?: undefined;
    } | {
        error: any;
        data?: undefined;
    }>;
    setBillingAddress: (billingAddress: ICheckoutAddress, checkoutId: string) => Promise<{
        data: ICheckoutModel;
        error?: undefined;
    } | {
        data?: undefined;
        error?: undefined;
    } | {
        error: any;
        data?: undefined;
    }>;
    setBillingAddressWithEmail: (billingAddress: ICheckoutAddress, email: string, checkoutId: string) => Promise<{
        data: ICheckoutModel;
        error?: undefined;
    } | {
        data?: undefined;
        error?: undefined;
    } | {
        error: any;
        data?: undefined;
    }>;
    setShippingMethod: (shippingMethodId: string, checkoutId: string) => Promise<{
        data: ICheckoutModel;
        error?: undefined;
    } | {
        data?: undefined;
        error?: undefined;
    } | {
        error: any;
        data?: undefined;
    }>;
    addPromoCode: (promoCode: string, checkoutId: string) => Promise<{
        data: ICheckoutModel;
        error?: undefined;
    } | {
        data?: undefined;
        error?: undefined;
    } | {
        error: any;
        data?: undefined;
    }>;
    removePromoCode: (promoCode: string, checkoutId: string) => Promise<{
        data: ICheckoutModel;
        error?: undefined;
    } | {
        data?: undefined;
        error?: undefined;
    } | {
        error: any;
        data?: undefined;
    }>;
    createPayment: ({ amount, checkoutId, gateway, billingAddress, token, returnUrl, }: CreatePaymentInput) => Promise<{
        data: IPaymentModel;
        error?: undefined;
    } | {
        data?: undefined;
        error?: undefined;
    } | {
        error: any;
        data?: undefined;
    }>;
    completeCheckout: ({ checkoutId, paymentData, redirectUrl, storeSource, }: CompleteCheckoutInput) => Promise<{
        data: import("../../mutations/gqlTypes/CompleteCheckout").CompleteCheckout_checkoutComplete;
        error?: undefined;
    } | {
        data?: undefined;
        error?: undefined;
    } | {
        error: any;
        data?: undefined;
    }>;
    private constructCheckoutModel;
    private constructPaymentModel;
}
