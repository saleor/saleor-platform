import { ApolloClient, ObservableQuery, QueryOptions as ApolloQueryOptions } from "apollo-client";
import { RequireOnlyOne } from "../tsHelpers";
import { OrderByToken, OrderByTokenVariables } from "./gqlTypes/OrderByToken";
import { UserOrderByToken, UserOrderByTokenVariables } from "./gqlTypes/UserOrderByToken";
import { Attributes, AttributesVariables } from "./gqlTypes/Attributes";
import { GetShop } from "./gqlTypes/GetShop";
import { OrdersByUser, OrdersByUserVariables } from "./gqlTypes/OrdersByUser";
import { VariantsProducts, VariantsProductsVariables } from "./gqlTypes/VariantsProducts";
import { CollectionListVariables, CollectionList } from "./gqlTypes/CollectionList";
declare type QueryOptions<T = {}> = T extends {
    [n: string]: never;
} ? Omit<ApolloQueryOptions<{}>, "query"> : RequireOnlyOne<Omit<ApolloQueryOptions<T>, "query">, "variables">;
export declare const QUERIES: {
    Attributes: <TCacheShape>(client: ApolloClient<TCacheShape>, options: QueryOptions<AttributesVariables>) => ObservableQuery<Attributes, any>;
    CollectionList: (client: ApolloClient<any>, options: QueryOptions<CollectionListVariables>) => ObservableQuery<CollectionList, any>;
    GetShopDetails: <TCacheShape_1>(client: ApolloClient<TCacheShape_1>, options: QueryOptions<null>) => ObservableQuery<GetShop, any>;
    OrderDetails: <TCacheShape_2>(client: ApolloClient<TCacheShape_2>, options: QueryOptions<OrderByTokenVariables>) => ObservableQuery<OrderByToken, any>;
    OrderDetailsByUser: <TCacheShape_3>(client: ApolloClient<TCacheShape_3>, options: QueryOptions<UserOrderByTokenVariables>) => ObservableQuery<UserOrderByToken, any>;
    OrdersByUser: <TCacheShape_4>(client: ApolloClient<TCacheShape_4>, options: QueryOptions<OrdersByUserVariables>) => ObservableQuery<OrdersByUser, any>;
    VariantsProducts: <TCacheShape_5>(client: ApolloClient<TCacheShape_5>, options: QueryOptions<VariantsProductsVariables>) => ObservableQuery<VariantsProducts, any>;
};
export declare type QUERIES = typeof QUERIES;
export {};
