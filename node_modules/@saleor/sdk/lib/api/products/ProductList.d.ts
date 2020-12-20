import BaseList, { GetPageInfo, MapQueryData } from "../../helpers/BaseList";
import { ProductList as ProductListQuery, ProductListVariables, ProductList_products_edges_node } from "../../queries/gqlTypes/ProductList";
export declare class ProductList extends BaseList<ProductListQuery, ProductList_products_edges_node, ProductListVariables> {
    getPageInfo: GetPageInfo<ProductListQuery>;
    mapQueryData: MapQueryData<ProductListQuery, ProductList_products_edges_node>;
    query: (variables: ProductListVariables) => Promise<import("apollo-client").ApolloQueryResult<ProductListQuery>>;
}
