import { ICheckoutModelLine, ICheckoutModelPrice, ICheckoutModelPriceValue } from "../../helpers/LocalStorageHandler";
export declare type IItems = ICheckoutModelLine[] | null | undefined;
export declare type ITotalPrice = ICheckoutModelPrice | null | undefined;
export declare type ISubtotalPrice = ICheckoutModelPrice | null | undefined;
export declare type IShippingPrice = ICheckoutModelPriceValue | null | undefined;
export declare type IDiscount = ICheckoutModelPriceValue | null | undefined;
