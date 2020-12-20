import ApolloClient from "apollo-client";
import { ConfigInput } from "../types";
import { AuthAPI } from "./Auth";
import APIProxy from "./APIProxy";
import { SaleorCartAPI } from "./Cart";
import { SaleorCheckoutAPI } from "./Checkout";
import { CollectionsAPI } from "./collections/collections";
import { CategoriesAPI } from "./categories/categories";
import { ProductsAPI } from "./products/products";
export * from "./Checkout";
export * from "./Cart";
export declare class SaleorAPI {
    auth: AuthAPI;
    checkout: SaleorCheckoutAPI;
    cart: SaleorCartAPI;
    categories: CategoriesAPI;
    collections: CollectionsAPI;
    products: ProductsAPI;
    /**
     * @deprecated Please do not use it anymore. Reference to API Proxy will be removed in future.
     * Now it just exists for legacy React hooks, which also will be removed.
     */
    legacyAPIProxy: APIProxy;
    constructor(client: ApolloClient<any>, apiProxy: APIProxy, config: ConfigInput, onStateUpdate?: () => any);
}
