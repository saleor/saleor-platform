export declare const useCollectionList: (variables: import("../../queries/gqlTypes/CollectionList").CollectionListVariables) => {
    current: Promise<import("apollo-client").ApolloQueryResult<import("../../queries/gqlTypes/CollectionList").CollectionList>> | null | undefined;
    data: import("../../fragments/gqlTypes/BaseCollection").BaseCollection[] | undefined;
    loading: boolean;
    next: () => Promise<void>;
    pageInfo: import("../../fragments/gqlTypes/PageInfo").PageInfo | undefined;
};
export declare const useCollectionDetails: (variables: import("../../queries/gqlTypes/CollectionDetails").CollectionDetailsVariables) => {
    current: Promise<import("apollo-client").ApolloQueryResult<import("../../queries/gqlTypes/CollectionDetails").CollectionDetails>> | null | undefined;
    data: import("../../fragments/gqlTypes/CollectionDetails").CollectionDetails | undefined;
    loading: boolean;
};
