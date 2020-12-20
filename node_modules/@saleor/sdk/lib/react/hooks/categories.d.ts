export declare const useCategoryList: (variables: import("../../queries/gqlTypes/CategoryList").CategoryListVariables) => {
    current: Promise<import("apollo-client").ApolloQueryResult<import("../../queries/gqlTypes/CategoryList").CategoryList>> | null | undefined;
    data: import("../../fragments/gqlTypes/BaseCategory").BaseCategory[] | undefined;
    loading: boolean;
    next: () => Promise<void>;
    pageInfo: import("../../fragments/gqlTypes/PageInfo").PageInfo | undefined;
};
export declare const useCategoryAncestorsList: (variables: import("../../queries/gqlTypes/CategoryAncestorsList").CategoryAncestorsListVariables) => {
    current: Promise<import("apollo-client").ApolloQueryResult<import("../../queries/gqlTypes/CategoryAncestorsList").CategoryAncestorsList>> | null | undefined;
    data: import("../../fragments/gqlTypes/BaseCategory").BaseCategory[] | undefined;
    loading: boolean;
    next: () => Promise<void>;
    pageInfo: import("../../fragments/gqlTypes/PageInfo").PageInfo | undefined;
};
export declare const useCategoryChildrenList: (variables: import("../../queries/gqlTypes/CategoryChildrenList").CategoryChildrenListVariables) => {
    current: Promise<import("apollo-client").ApolloQueryResult<import("../../queries/gqlTypes/CategoryChildrenList").CategoryChildrenList>> | null | undefined;
    data: import("../../fragments/gqlTypes/BaseCategory").BaseCategory[] | undefined;
    loading: boolean;
    next: () => Promise<void>;
    pageInfo: import("../../fragments/gqlTypes/PageInfo").PageInfo | undefined;
};
export declare const useCategoryDetails: (variables: import("../../queries/gqlTypes/CategoryDetails").CategoryDetailsVariables) => {
    current: Promise<import("apollo-client").ApolloQueryResult<import("../../queries/gqlTypes/CategoryDetails").CategoryDetails>> | null | undefined;
    data: import("../../fragments/gqlTypes/CategoryDetails").CategoryDetails | undefined;
    loading: boolean;
};
