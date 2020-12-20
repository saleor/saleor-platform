import { SaleorState } from "../../state";
import { LocalStorageHandler } from "../../helpers/LocalStorageHandler/LocalStorageHandler";
export declare class LocalStorageManager {
    private handler;
    private saleorState;
    constructor(handler: LocalStorageHandler, saleorState: SaleorState);
    getHandler: () => LocalStorageHandler;
    addItemToCart: (variantId: string, quantity: number) => {
        lines: import("../../helpers").ICheckoutModelLine[];
        id?: string | undefined;
        token?: any;
        email?: string | undefined;
        shippingAddress?: import("../../helpers").ICheckoutAddress | null | undefined;
        billingAddress?: import("../../helpers").ICheckoutAddress | null | undefined;
        selectedShippingAddressId?: string | undefined;
        selectedBillingAddressId?: string | undefined;
        billingAsShipping?: boolean | undefined;
        promoCodeDiscount?: import("../../helpers").ICheckoutModelPromoCodeDiscount | undefined;
        availableShippingMethods?: import("../../fragments/gqlTypes/Checkout").Checkout_availableShippingMethods[] | undefined;
        availablePaymentGateways?: import("../../fragments/gqlTypes/Checkout").Checkout_availablePaymentGateways[] | undefined;
        shippingMethod?: import("../../helpers").ICheckoutModelShippingMethod | null | undefined;
    };
    removeItemFromCart: (variantId: string) => {
        lines: import("../../helpers").ICheckoutModelLine[];
        id?: string | undefined;
        token?: any;
        email?: string | undefined;
        shippingAddress?: import("../../helpers").ICheckoutAddress | null | undefined;
        billingAddress?: import("../../helpers").ICheckoutAddress | null | undefined;
        selectedShippingAddressId?: string | undefined;
        selectedBillingAddressId?: string | undefined;
        billingAsShipping?: boolean | undefined;
        promoCodeDiscount?: import("../../helpers").ICheckoutModelPromoCodeDiscount | undefined;
        availableShippingMethods?: import("../../fragments/gqlTypes/Checkout").Checkout_availableShippingMethods[] | undefined;
        availablePaymentGateways?: import("../../fragments/gqlTypes/Checkout").Checkout_availablePaymentGateways[] | undefined;
        shippingMethod?: import("../../helpers").ICheckoutModelShippingMethod | null | undefined;
    };
    subtractItemFromCart: (variantId: string) => {
        lines: import("../../helpers").ICheckoutModelLine[];
        id?: string | undefined;
        token?: any;
        email?: string | undefined;
        shippingAddress?: import("../../helpers").ICheckoutAddress | null | undefined;
        billingAddress?: import("../../helpers").ICheckoutAddress | null | undefined;
        selectedShippingAddressId?: string | undefined;
        selectedBillingAddressId?: string | undefined;
        billingAsShipping?: boolean | undefined;
        promoCodeDiscount?: import("../../helpers").ICheckoutModelPromoCodeDiscount | undefined;
        availableShippingMethods?: import("../../fragments/gqlTypes/Checkout").Checkout_availableShippingMethods[] | undefined;
        availablePaymentGateways?: import("../../fragments/gqlTypes/Checkout").Checkout_availablePaymentGateways[] | undefined;
        shippingMethod?: import("../../helpers").ICheckoutModelShippingMethod | null | undefined;
    };
    updateItemInCart: (variantId: string, quantity: number) => {
        lines: import("../../helpers").ICheckoutModelLine[];
        id?: string | undefined;
        token?: any;
        email?: string | undefined;
        shippingAddress?: import("../../helpers").ICheckoutAddress | null | undefined;
        billingAddress?: import("../../helpers").ICheckoutAddress | null | undefined;
        selectedShippingAddressId?: string | undefined;
        selectedBillingAddressId?: string | undefined;
        billingAsShipping?: boolean | undefined;
        promoCodeDiscount?: import("../../helpers").ICheckoutModelPromoCodeDiscount | undefined;
        availableShippingMethods?: import("../../fragments/gqlTypes/Checkout").Checkout_availableShippingMethods[] | undefined;
        availablePaymentGateways?: import("../../fragments/gqlTypes/Checkout").Checkout_availablePaymentGateways[] | undefined;
        shippingMethod?: import("../../helpers").ICheckoutModelShippingMethod | null | undefined;
    };
}
