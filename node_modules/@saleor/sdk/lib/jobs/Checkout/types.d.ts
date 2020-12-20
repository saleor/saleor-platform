import { ICreditCard } from "../../api/Checkout/types";
import { ICheckoutAddress } from "../../helpers/LocalStorageHandler";
export interface ProvideCheckoutJobInput {
    isUserSignedIn: boolean;
}
export interface CreateCheckoutJobInput {
    email: string;
    lines: Array<{
        variantId: string;
        quantity: number;
    }>;
    shippingAddress?: ICheckoutAddress;
    selectedShippingAddressId?: string;
    billingAddress?: ICheckoutAddress;
    selectedBillingAddressId?: string;
}
export interface SetShippingAddressJobInput {
    checkoutId: string;
    shippingAddress: ICheckoutAddress;
    email: string;
    selectedShippingAddressId?: string;
}
export interface SetBillingAddressJobInput {
    checkoutId: string;
    billingAddress: ICheckoutAddress;
    billingAsShipping?: boolean;
    selectedBillingAddressId?: string;
}
export interface SetBillingAddressWithEmailJobInput {
    checkoutId: string;
    email: string;
    billingAddress: ICheckoutAddress;
    selectedBillingAddressId?: string;
}
export interface SetShippingMethodJobInput {
    checkoutId: string;
    shippingMethodId: string;
}
export interface AddPromoCodeJobInput {
    checkoutId: string;
    promoCode: string;
}
export interface RemovePromoCodeJobInput {
    checkoutId: string;
    promoCode: string;
}
export interface CreatePaymentJobInput {
    checkoutId: string;
    amount: number;
    gateway: string;
    token?: string;
    billingAddress: ICheckoutAddress;
    creditCard?: ICreditCard;
    returnUrl?: string;
}
export interface CompleteCheckoutJobInput {
    checkoutId: string;
    paymentData?: object;
    redirectUrl?: string;
    storeSource?: boolean;
}
