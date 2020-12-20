import { PaymentGateway } from "../../fragments/gqlTypes/PaymentGateway";
import { ErrorListener } from "../../helpers";
import { JobsManager } from "../../jobs";
import { SaleorState } from "../../state";
import { PromiseRunResponse } from "../types";
import { DataErrorCheckoutTypes, FunctionErrorCheckoutTypes, IAddress, IAvailableShippingMethods, ICheckout, IPayment, IPromoCodeDiscount, CreatePaymentInput, CompleteCheckoutInput } from "./types";
export declare class SaleorCheckoutAPI extends ErrorListener {
    loaded: boolean;
    checkout?: ICheckout;
    promoCodeDiscount?: IPromoCodeDiscount;
    billingAsShipping?: boolean;
    selectedShippingAddressId?: string;
    selectedBillingAddressId?: string;
    availableShippingMethods?: IAvailableShippingMethods;
    availablePaymentGateways?: PaymentGateway[];
    payment?: IPayment;
    private saleorState;
    private jobsManager;
    constructor(saleorState: SaleorState, jobsManager: JobsManager);
    setShippingAddress: (shippingAddress: IAddress, email: string) => PromiseRunResponse<DataErrorCheckoutTypes, FunctionErrorCheckoutTypes>;
    setBillingAddress: (billingAddress: IAddress, email?: string | undefined) => PromiseRunResponse<DataErrorCheckoutTypes, FunctionErrorCheckoutTypes>;
    setBillingAsShippingAddress: () => PromiseRunResponse<DataErrorCheckoutTypes, FunctionErrorCheckoutTypes>;
    setShippingMethod: (shippingMethodId: string) => PromiseRunResponse<DataErrorCheckoutTypes, FunctionErrorCheckoutTypes>;
    addPromoCode: (promoCode: string) => PromiseRunResponse<DataErrorCheckoutTypes, FunctionErrorCheckoutTypes>;
    removePromoCode: (promoCode: string) => PromiseRunResponse<DataErrorCheckoutTypes, FunctionErrorCheckoutTypes>;
    createPayment: (input: CreatePaymentInput) => PromiseRunResponse<DataErrorCheckoutTypes, FunctionErrorCheckoutTypes>;
    completeCheckout: (input?: CompleteCheckoutInput | undefined) => PromiseRunResponse<DataErrorCheckoutTypes, FunctionErrorCheckoutTypes>;
}
