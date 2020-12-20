import ApolloClient from "apollo-client";
import { ProductDetails as ProductDetailsQuery, ProductDetailsVariables } from "../../queries/gqlTypes/ProductDetails";
import { ProductDetails as ProductDetailsFragment } from "../../fragments/gqlTypes/ProductDetails";
import { ProductList as ProductListQuery, ProductList_products_edges_node, ProductListVariables } from "../../queries/gqlTypes/ProductList";
import { WithDetails, WithList } from "../types";
import { ProductDetails } from "./ProductDetails";
import { ProductList } from "./ProductList";
export declare class ProductsAPI implements WithDetails<ProductDetailsQuery, ProductDetailsFragment, ProductDetailsVariables>, WithList<ProductListQuery, ProductList_products_edges_node, ProductListVariables> {
    private client;
    constructor(client: ApolloClient<any>);
    /**
     * Method returning product details
     * @param variables Details parameters
     */
    getDetails: (variables: ProductDetailsVariables) => Promise<ProductDetails>;
    /**
     * Method returning list of products with ability to request next page
     * @param params List parameters
     */
    getList: (variables: ProductListVariables) => Promise<ProductList>;
}
