export declare const useShopDetails: (options?: (Pick<Pick<import("../tsHelpers").RequireOnlyOne<Pick<import("apollo-client").QueryOptions<null>, "context" | "fetchPolicy" | "errorPolicy" | "variables" | "fetchResults" | "metadata">, "variables"> | import("apollo-client").WatchQueryOptions<import("../tsHelpers").RequireOnlyOne<Pick<import("apollo-client").QueryOptions<null>, "context" | "fetchPolicy" | "errorPolicy" | "variables" | "fetchResults" | "metadata">, "variables">>, "context" | "fetchPolicy" | "errorPolicy" | "fetchResults" | "metadata"> & {
    skip?: boolean | undefined;
    onComplete?: (() => void) | undefined;
    onError?: ((error: import("apollo-client").ApolloError) => void) | undefined;
    onUpdate: (data: import("../queries/gqlTypes/GetShop").GetShop | null, loading?: boolean | undefined) => void;
}, "context" | "fetchPolicy" | "errorPolicy" | "fetchResults" | "metadata" | "skip"> & {
    skip?: boolean | undefined;
}) | undefined) => {
    loadMore: (loadMoreVariables: never, mergeResults?: boolean) => void;
    refetch: (refetchVariables?: null | undefined) => void;
    setOptions: ((newOptions: any) => Promise<{
        data: unknown;
    }>) | undefined;
    data: import("../queries/gqlTypes/GetShop").GetShop | null;
    loading: boolean;
    error: import("./types").ApolloErrorWithUserInput | null;
};
export declare const useOrderDetails: (variables: import("../queries/gqlTypes/UserOrderByToken").UserOrderByTokenVariables | import("../queries/gqlTypes/OrderByToken").OrderByTokenVariables, options?: (Pick<Pick<import("../tsHelpers").RequireOnlyOne<Pick<import("apollo-client").QueryOptions<import("../queries/gqlTypes/OrderByToken").OrderByTokenVariables>, "context" | "fetchPolicy" | "errorPolicy" | "variables" | "fetchResults" | "metadata">, "variables"> | import("../tsHelpers").RequireOnlyOne<Pick<import("apollo-client").QueryOptions<import("../queries/gqlTypes/UserOrderByToken").UserOrderByTokenVariables>, "context" | "fetchPolicy" | "errorPolicy" | "variables" | "fetchResults" | "metadata">, "variables">, "context" | "fetchPolicy" | "errorPolicy" | "fetchResults" | "metadata"> & {
    onUpdate: (data: import("../queries/gqlTypes/UserOrderByToken").UserOrderByToken_orderByToken | import("../queries/gqlTypes/OrderByToken").OrderByToken_orderByToken | null) => void;
}, "context" | "fetchPolicy" | "errorPolicy" | "fetchResults" | "metadata"> & {
    skip?: boolean | undefined;
}) | undefined) => {
    loadMore: (loadMoreVariables: import("../tsHelpers").RequireAtLeastOne<import("../queries/gqlTypes/UserOrderByToken").UserOrderByTokenVariables | import("../queries/gqlTypes/OrderByToken").OrderByTokenVariables, "token">, mergeResults?: boolean) => void;
    refetch: (refetchVariables?: import("../queries/gqlTypes/UserOrderByToken").UserOrderByTokenVariables | import("../queries/gqlTypes/OrderByToken").OrderByTokenVariables | undefined) => void;
    setOptions: ((newOptions: any) => Promise<{
        data: unknown;
    }>) | undefined;
    data: import("../queries/gqlTypes/UserOrderByToken").UserOrderByToken_orderByToken | import("../queries/gqlTypes/OrderByToken").OrderByToken_orderByToken | null;
    loading: boolean;
    error: import("./types").ApolloErrorWithUserInput | null;
};
export declare const useOrdersByUser: (variables: import("../queries/gqlTypes/OrdersByUser").OrdersByUserVariables, options?: (Pick<Pick<import("../tsHelpers").RequireOnlyOne<Pick<import("apollo-client").QueryOptions<import("../queries/gqlTypes/OrdersByUser").OrdersByUserVariables>, "context" | "fetchPolicy" | "errorPolicy" | "variables" | "fetchResults" | "metadata">, "variables"> | import("apollo-client").WatchQueryOptions<import("../tsHelpers").RequireOnlyOne<Pick<import("apollo-client").QueryOptions<import("../queries/gqlTypes/OrdersByUser").OrdersByUserVariables>, "context" | "fetchPolicy" | "errorPolicy" | "variables" | "fetchResults" | "metadata">, "variables">>, "context" | "fetchPolicy" | "errorPolicy" | "fetchResults" | "metadata"> & {
    skip?: boolean | undefined;
    onComplete?: (() => void) | undefined;
    onError?: ((error: import("apollo-client").ApolloError) => void) | undefined;
    onUpdate: (data: import("../queries/gqlTypes/OrdersByUser").OrdersByUser_me_orders | null, loading?: boolean | undefined) => void;
}, "context" | "fetchPolicy" | "errorPolicy" | "fetchResults" | "metadata" | "skip"> & {
    skip?: boolean | undefined;
}) | undefined) => {
    loadMore: (loadMoreVariables: import("../tsHelpers").RequireAtLeastOne<import("../queries/gqlTypes/OrdersByUser").OrdersByUserVariables, "perPage" | "after">, mergeResults?: boolean) => void;
    refetch: (refetchVariables?: import("../queries/gqlTypes/OrdersByUser").OrdersByUserVariables | undefined) => void;
    setOptions: ((newOptions: any) => Promise<{
        data: unknown;
    }>) | undefined;
    data: import("../queries/gqlTypes/OrdersByUser").OrdersByUser_me_orders | null;
    loading: boolean;
    error: import("./types").ApolloErrorWithUserInput | null;
};
export declare const useAtrributes: (variables: import("../queries/gqlTypes/Attributes").AttributesVariables, options?: (Pick<Pick<import("../tsHelpers").RequireOnlyOne<Pick<import("apollo-client").QueryOptions<import("../queries/gqlTypes/Attributes").AttributesVariables>, "context" | "fetchPolicy" | "errorPolicy" | "variables" | "fetchResults" | "metadata">, "variables"> | import("apollo-client").WatchQueryOptions<import("../tsHelpers").RequireOnlyOne<Pick<import("apollo-client").QueryOptions<import("../queries/gqlTypes/Attributes").AttributesVariables>, "context" | "fetchPolicy" | "errorPolicy" | "variables" | "fetchResults" | "metadata">, "variables">>, "context" | "fetchPolicy" | "errorPolicy" | "fetchResults" | "metadata"> & {
    skip?: boolean | undefined;
    onComplete?: (() => void) | undefined;
    onError?: ((error: import("apollo-client").ApolloError) => void) | undefined;
    onUpdate: (data: import("../queries/gqlTypes/Attributes").Attributes_attributes | null, loading?: boolean | undefined) => void;
}, "context" | "fetchPolicy" | "errorPolicy" | "fetchResults" | "metadata" | "skip"> & {
    skip?: boolean | undefined;
}) | undefined) => {
    loadMore: (loadMoreVariables: import("../tsHelpers").RequireAtLeastOne<import("../queries/gqlTypes/Attributes").AttributesVariables, "id">, mergeResults?: boolean) => void;
    refetch: (refetchVariables?: import("../queries/gqlTypes/Attributes").AttributesVariables | undefined) => void;
    setOptions: ((newOptions: any) => Promise<{
        data: unknown;
    }>) | undefined;
    data: import("../queries/gqlTypes/Attributes").Attributes_attributes | null;
    loading: boolean;
    error: import("./types").ApolloErrorWithUserInput | null;
};
export declare const useVariantsProducts: (variables: import("../queries/gqlTypes/VariantsProducts").VariantsProductsVariables, options?: (Pick<Pick<import("../tsHelpers").RequireOnlyOne<Pick<import("apollo-client").QueryOptions<import("../queries/gqlTypes/VariantsProducts").VariantsProductsVariables>, "context" | "fetchPolicy" | "errorPolicy" | "variables" | "fetchResults" | "metadata">, "variables"> | import("apollo-client").WatchQueryOptions<import("../tsHelpers").RequireOnlyOne<Pick<import("apollo-client").QueryOptions<import("../queries/gqlTypes/VariantsProducts").VariantsProductsVariables>, "context" | "fetchPolicy" | "errorPolicy" | "variables" | "fetchResults" | "metadata">, "variables">>, "context" | "fetchPolicy" | "errorPolicy" | "fetchResults" | "metadata"> & {
    skip?: boolean | undefined;
    onComplete?: (() => void) | undefined;
    onError?: ((error: import("apollo-client").ApolloError) => void) | undefined;
    onUpdate: (data: import("../queries/gqlTypes/VariantsProducts").VariantsProducts_productVariants | null, loading?: boolean | undefined) => void;
}, "context" | "fetchPolicy" | "errorPolicy" | "fetchResults" | "metadata" | "skip"> & {
    skip?: boolean | undefined;
}) | undefined) => {
    loadMore: (loadMoreVariables: import("../tsHelpers").RequireAtLeastOne<import("../queries/gqlTypes/VariantsProducts").VariantsProductsVariables, "ids">, mergeResults?: boolean) => void;
    refetch: (refetchVariables?: import("../queries/gqlTypes/VariantsProducts").VariantsProductsVariables | undefined) => void;
    setOptions: ((newOptions: any) => Promise<{
        data: unknown;
    }>) | undefined;
    data: import("../queries/gqlTypes/VariantsProducts").VariantsProducts_productVariants | null;
    loading: boolean;
    error: import("./types").ApolloErrorWithUserInput | null;
};
