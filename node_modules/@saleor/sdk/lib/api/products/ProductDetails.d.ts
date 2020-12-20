import BaseDetails, { MapQueryData } from "../../helpers/BaseDetails";
import { ProductDetails as ProductDetailsQuery, ProductDetailsVariables } from "../../queries/gqlTypes/ProductDetails";
import { ProductDetails as Product } from "../../fragments/gqlTypes/ProductDetails";
export declare class ProductDetails extends BaseDetails<ProductDetailsQuery, Product, ProductDetailsVariables> {
    mapQueryData: MapQueryData<ProductDetailsQuery, Product>;
    query: (variables: ProductDetailsVariables) => Promise<import("apollo-client").ApolloQueryResult<ProductDetailsQuery>>;
}
