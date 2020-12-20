export declare const useProductList: (variables: import("../../queries/gqlTypes/ProductList").ProductListVariables) => {
    current: Promise<import("apollo-client").ApolloQueryResult<import("../../queries/gqlTypes/ProductList").ProductList>> | null | undefined;
    data: import("../../queries/gqlTypes/ProductList").ProductList_products_edges_node[] | undefined;
    loading: boolean;
    next: () => Promise<void>;
    pageInfo: import("../../fragments/gqlTypes/PageInfo").PageInfo | undefined;
};
export declare const useProductDetails: (variables: import("../../queries/gqlTypes/ProductDetails").ProductDetailsVariables) => {
    current: Promise<import("apollo-client").ApolloQueryResult<import("../../queries/gqlTypes/ProductDetails").ProductDetails>> | null | undefined;
    data: import("../../fragments/gqlTypes/ProductDetails").ProductDetails | undefined;
    loading: boolean;
};
