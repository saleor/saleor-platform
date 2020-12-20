import { ApolloClient, ApolloError, WatchQueryOptions } from "apollo-client";
import { UserOrderByToken } from "../queries/gqlTypes/UserOrderByToken";
import { OrderByToken } from "../queries/gqlTypes/OrderByToken";
import { PasswordChange } from "../mutations/gqlTypes/PasswordChange";
import { SetPassword } from "../mutations/gqlTypes/SetPassword";
import { MUTATIONS } from "../mutations";
import { QUERIES } from "../queries";
import { RequireAtLeastOne } from "../tsHelpers";
import { InferOptions, MapFn, QueryShape, WatchMapFn } from "../types";
import { SetPasswordChange, SetPasswordResult } from "./types";
declare class APIProxy {
    client: ApolloClient<any>;
    constructor(client: ApolloClient<any>);
    getAttributes: <TVariables extends import("../queries/gqlTypes/Attributes").AttributesVariables, TOptions extends Pick<import("../tsHelpers").RequireOnlyOne<Pick<import("apollo-client").QueryOptions<import("../queries/gqlTypes/Attributes").AttributesVariables>, "context" | "fetchPolicy" | "errorPolicy" | "variables" | "fetchResults" | "metadata">, "variables"> | WatchQueryOptions<import("../tsHelpers").RequireOnlyOne<Pick<import("apollo-client").QueryOptions<import("../queries/gqlTypes/Attributes").AttributesVariables>, "context" | "fetchPolicy" | "errorPolicy" | "variables" | "fetchResults" | "metadata">, "variables">>, "context" | "fetchPolicy" | "errorPolicy" | "fetchResults" | "metadata">>(variables: TVariables, options: TOptions & {
        skip?: boolean | undefined;
        onComplete?: (() => void) | undefined;
        onError?: ((error: ApolloError) => void) | undefined;
        onUpdate: (data: import("../queries/gqlTypes/Attributes").Attributes_attributes | null, loading?: boolean | undefined) => void;
    }) => {
        refetch: () => Promise<unknown>;
        unsubscribe: null;
        loadMore?: undefined;
        setOptions?: undefined;
    } | {
        loadMore: (extraVariables: RequireAtLeastOne<TVariables, keyof TVariables>, mergeResults?: boolean) => void;
        refetch: (newVariables?: TVariables | undefined) => Promise<{
            data: import("../queries/gqlTypes/Attributes").Attributes_attributes | null;
        }>;
        setOptions: (newOptions: TOptions) => Promise<{
            data: import("../queries/gqlTypes/Attributes").Attributes_attributes | null;
        }>;
        unsubscribe: () => void;
    };
    getOrdersByUser: <TVariables extends import("../queries/gqlTypes/OrdersByUser").OrdersByUserVariables, TOptions extends Pick<import("../tsHelpers").RequireOnlyOne<Pick<import("apollo-client").QueryOptions<import("../queries/gqlTypes/OrdersByUser").OrdersByUserVariables>, "context" | "fetchPolicy" | "errorPolicy" | "variables" | "fetchResults" | "metadata">, "variables"> | WatchQueryOptions<import("../tsHelpers").RequireOnlyOne<Pick<import("apollo-client").QueryOptions<import("../queries/gqlTypes/OrdersByUser").OrdersByUserVariables>, "context" | "fetchPolicy" | "errorPolicy" | "variables" | "fetchResults" | "metadata">, "variables">>, "context" | "fetchPolicy" | "errorPolicy" | "fetchResults" | "metadata">>(variables: TVariables, options: TOptions & {
        skip?: boolean | undefined;
        onComplete?: (() => void) | undefined;
        onError?: ((error: ApolloError) => void) | undefined;
        onUpdate: (data: import("../queries/gqlTypes/OrdersByUser").OrdersByUser_me_orders | null, loading?: boolean | undefined) => void;
    }) => {
        refetch: () => Promise<unknown>;
        unsubscribe: null;
        loadMore?: undefined;
        setOptions?: undefined;
    } | {
        loadMore: (extraVariables: RequireAtLeastOne<TVariables, keyof TVariables>, mergeResults?: boolean) => void;
        refetch: (newVariables?: TVariables | undefined) => Promise<{
            data: import("../queries/gqlTypes/OrdersByUser").OrdersByUser_me_orders | null;
        }>;
        setOptions: (newOptions: TOptions) => Promise<{
            data: import("../queries/gqlTypes/OrdersByUser").OrdersByUser_me_orders | null;
        }>;
        unsubscribe: () => void;
    };
    getOrderDetails: (variables: InferOptions<QUERIES["OrderDetails"] | QUERIES["OrderDetailsByUser"]>["variables"], options: Pick<import("../tsHelpers").RequireOnlyOne<Pick<import("apollo-client").QueryOptions<import("../queries/gqlTypes/OrderByToken").OrderByTokenVariables>, "context" | "fetchPolicy" | "errorPolicy" | "variables" | "fetchResults" | "metadata">, "variables"> | import("../tsHelpers").RequireOnlyOne<Pick<import("apollo-client").QueryOptions<import("../queries/gqlTypes/UserOrderByToken").UserOrderByTokenVariables>, "context" | "fetchPolicy" | "errorPolicy" | "variables" | "fetchResults" | "metadata">, "variables">, "context" | "fetchPolicy" | "errorPolicy" | "fetchResults" | "metadata"> & {
        onUpdate: (data: OrderByToken["orderByToken"] | UserOrderByToken["orderByToken"] | null) => void;
    }) => {
        refetch: () => Promise<unknown>;
        unsubscribe: null;
        loadMore?: undefined;
        setOptions?: undefined;
    } | {
        loadMore: (extraVariables: RequireAtLeastOne<import("../queries/gqlTypes/UserOrderByToken").UserOrderByTokenVariables | import("../queries/gqlTypes/OrderByToken").OrderByTokenVariables, "token">, mergeResults?: boolean) => void;
        refetch: (newVariables?: import("../queries/gqlTypes/UserOrderByToken").UserOrderByTokenVariables | import("../queries/gqlTypes/OrderByToken").OrderByTokenVariables | undefined) => Promise<{
            data: import("../queries/gqlTypes/OrderByToken").OrderByToken_orderByToken | null;
        }>;
        setOptions: (newOptions: Pick<import("../tsHelpers").RequireOnlyOne<Pick<import("apollo-client").QueryOptions<import("../queries/gqlTypes/OrderByToken").OrderByTokenVariables>, "context" | "fetchPolicy" | "errorPolicy" | "variables" | "fetchResults" | "metadata">, "variables"> | import("../tsHelpers").RequireOnlyOne<Pick<import("apollo-client").QueryOptions<import("../queries/gqlTypes/UserOrderByToken").UserOrderByTokenVariables>, "context" | "fetchPolicy" | "errorPolicy" | "variables" | "fetchResults" | "metadata">, "variables">, "context" | "fetchPolicy" | "errorPolicy" | "fetchResults" | "metadata"> & {
            onUpdate: (data: OrderByToken["orderByToken"] | UserOrderByToken["orderByToken"] | null) => void;
        }) => Promise<{
            data: import("../queries/gqlTypes/OrderByToken").OrderByToken_orderByToken | null;
        }>;
        unsubscribe: () => void;
    };
    getVariantsProducts: <TVariables extends import("../queries/gqlTypes/VariantsProducts").VariantsProductsVariables, TOptions extends Pick<import("../tsHelpers").RequireOnlyOne<Pick<import("apollo-client").QueryOptions<import("../queries/gqlTypes/VariantsProducts").VariantsProductsVariables>, "context" | "fetchPolicy" | "errorPolicy" | "variables" | "fetchResults" | "metadata">, "variables"> | WatchQueryOptions<import("../tsHelpers").RequireOnlyOne<Pick<import("apollo-client").QueryOptions<import("../queries/gqlTypes/VariantsProducts").VariantsProductsVariables>, "context" | "fetchPolicy" | "errorPolicy" | "variables" | "fetchResults" | "metadata">, "variables">>, "context" | "fetchPolicy" | "errorPolicy" | "fetchResults" | "metadata">>(variables: TVariables, options: TOptions & {
        skip?: boolean | undefined;
        onComplete?: (() => void) | undefined;
        onError?: ((error: ApolloError) => void) | undefined;
        onUpdate: (data: import("../queries/gqlTypes/VariantsProducts").VariantsProducts_productVariants | null, loading?: boolean | undefined) => void;
    }) => {
        refetch: () => Promise<unknown>;
        unsubscribe: null;
        loadMore?: undefined;
        setOptions?: undefined;
    } | {
        loadMore: (extraVariables: RequireAtLeastOne<TVariables, keyof TVariables>, mergeResults?: boolean) => void;
        refetch: (newVariables?: TVariables | undefined) => Promise<{
            data: import("../queries/gqlTypes/VariantsProducts").VariantsProducts_productVariants | null;
        }>;
        setOptions: (newOptions: TOptions) => Promise<{
            data: import("../queries/gqlTypes/VariantsProducts").VariantsProducts_productVariants | null;
        }>;
        unsubscribe: () => void;
    };
    getShopDetails: <TVariables extends null, TOptions extends Pick<import("../tsHelpers").RequireOnlyOne<Pick<import("apollo-client").QueryOptions<null>, "context" | "fetchPolicy" | "errorPolicy" | "variables" | "fetchResults" | "metadata">, "variables"> | WatchQueryOptions<import("../tsHelpers").RequireOnlyOne<Pick<import("apollo-client").QueryOptions<null>, "context" | "fetchPolicy" | "errorPolicy" | "variables" | "fetchResults" | "metadata">, "variables">>, "context" | "fetchPolicy" | "errorPolicy" | "fetchResults" | "metadata">>(variables: TVariables, options: TOptions & {
        skip?: boolean | undefined;
        onComplete?: (() => void) | undefined;
        onError?: ((error: ApolloError) => void) | undefined;
        onUpdate: (data: import("../queries/gqlTypes/GetShop").GetShop | null, loading?: boolean | undefined) => void;
    }) => {
        refetch: () => Promise<unknown>;
        unsubscribe: null;
        loadMore?: undefined;
        setOptions?: undefined;
    } | {
        loadMore: (extraVariables: RequireAtLeastOne<TVariables, keyof TVariables>, mergeResults?: boolean) => void;
        refetch: (newVariables?: TVariables | undefined) => Promise<{
            data: import("../queries/gqlTypes/GetShop").GetShop | null;
        }>;
        setOptions: (newOptions: TOptions) => Promise<{
            data: import("../queries/gqlTypes/GetShop").GetShop | null;
        }>;
        unsubscribe: () => void;
    };
    setUserDefaultAddress: (variables: import("../mutations/gqlTypes/SetCustomerDefaultAddress").SetCustomerDefaultAddressVariables | undefined, options?: Pick<Pick<import("apollo-client").MutationOptions<import("../mutations/gqlTypes/SetCustomerDefaultAddress").SetCustomerDefaultAddress, import("../mutations/gqlTypes/SetCustomerDefaultAddress").SetCustomerDefaultAddressVariables>, "context" | "fetchPolicy" | "optimisticResponse" | "updateQueries" | "refetchQueries" | "awaitRefetchQueries" | "update" | "errorPolicy" | "variables">, "context" | "fetchPolicy" | "optimisticResponse" | "updateQueries" | "refetchQueries" | "awaitRefetchQueries" | "update" | "errorPolicy"> | undefined) => Promise<{
        data: import("../mutations/gqlTypes/SetCustomerDefaultAddress").SetCustomerDefaultAddress_accountSetDefaultAddress | null;
    }>;
    setDeleteUserAddress: (variables: import("../mutations/gqlTypes/DeleteUserAddress").DeleteUserAddressVariables | undefined, options?: Pick<Pick<import("apollo-client").MutationOptions<import("../mutations/gqlTypes/DeleteUserAddress").DeleteUserAddress, import("../mutations/gqlTypes/DeleteUserAddress").DeleteUserAddressVariables>, "context" | "fetchPolicy" | "optimisticResponse" | "updateQueries" | "refetchQueries" | "awaitRefetchQueries" | "update" | "errorPolicy" | "variables">, "context" | "fetchPolicy" | "optimisticResponse" | "updateQueries" | "refetchQueries" | "awaitRefetchQueries" | "update" | "errorPolicy"> | undefined) => Promise<{
        data: import("../mutations/gqlTypes/DeleteUserAddress").DeleteUserAddress_accountAddressDelete | null;
    }>;
    setCreateUserAddress: (variables: import("../mutations/gqlTypes/CreateUserAddress").CreateUserAddressVariables | undefined, options?: Pick<Pick<import("apollo-client").MutationOptions<import("../mutations/gqlTypes/CreateUserAddress").CreateUserAddress, import("../mutations/gqlTypes/CreateUserAddress").CreateUserAddressVariables>, "context" | "fetchPolicy" | "optimisticResponse" | "updateQueries" | "refetchQueries" | "awaitRefetchQueries" | "update" | "errorPolicy" | "variables">, "context" | "fetchPolicy" | "optimisticResponse" | "updateQueries" | "refetchQueries" | "awaitRefetchQueries" | "update" | "errorPolicy"> | undefined) => Promise<{
        data: import("../mutations/gqlTypes/CreateUserAddress").CreateUserAddress_accountAddressCreate | null;
    }>;
    setUpdateuserAddress: (variables: import("../mutations/gqlTypes/UpdateUserAddress").UpdateUserAddressVariables | undefined, options?: Pick<Pick<import("apollo-client").MutationOptions<import("../mutations/gqlTypes/UpdateUserAddress").UpdateUserAddress, import("../mutations/gqlTypes/UpdateUserAddress").UpdateUserAddressVariables>, "context" | "fetchPolicy" | "optimisticResponse" | "updateQueries" | "refetchQueries" | "awaitRefetchQueries" | "update" | "errorPolicy" | "variables">, "context" | "fetchPolicy" | "optimisticResponse" | "updateQueries" | "refetchQueries" | "awaitRefetchQueries" | "update" | "errorPolicy"> | undefined) => Promise<{
        data: import("../mutations/gqlTypes/UpdateUserAddress").UpdateUserAddress_accountAddressUpdate | null;
    }>;
    setAccountUpdate: (variables: import("../mutations/gqlTypes/AccountUpdate").AccountUpdateVariables | undefined, options?: Pick<Pick<import("apollo-client").MutationOptions<import("../mutations/gqlTypes/AccountUpdate").AccountUpdate, import("../mutations/gqlTypes/AccountUpdate").AccountUpdateVariables>, "context" | "fetchPolicy" | "optimisticResponse" | "updateQueries" | "refetchQueries" | "awaitRefetchQueries" | "update" | "errorPolicy" | "variables">, "context" | "fetchPolicy" | "optimisticResponse" | "updateQueries" | "refetchQueries" | "awaitRefetchQueries" | "update" | "errorPolicy"> | undefined) => Promise<{
        data: import("../mutations/gqlTypes/AccountUpdate").AccountUpdate_accountUpdate | null;
    }>;
    setPassword: (variables: InferOptions<MUTATIONS["SetPassword"]>["variables"], options?: Pick<Pick<import("apollo-client").MutationOptions<SetPassword, import("../mutations/gqlTypes/SetPassword").SetPasswordVariables>, "context" | "fetchPolicy" | "optimisticResponse" | "updateQueries" | "refetchQueries" | "awaitRefetchQueries" | "update" | "errorPolicy" | "variables">, "context" | "fetchPolicy" | "optimisticResponse" | "updateQueries" | "refetchQueries" | "awaitRefetchQueries" | "update" | "errorPolicy"> | undefined) => Promise<SetPasswordResult>;
    setPasswordChange: (variables: InferOptions<MUTATIONS["PasswordChange"]>["variables"], options?: Pick<Pick<import("apollo-client").MutationOptions<PasswordChange, import("../mutations/gqlTypes/PasswordChange").PasswordChangeVariables>, "context" | "fetchPolicy" | "optimisticResponse" | "updateQueries" | "refetchQueries" | "awaitRefetchQueries" | "update" | "errorPolicy" | "variables">, "context" | "fetchPolicy" | "optimisticResponse" | "updateQueries" | "refetchQueries" | "awaitRefetchQueries" | "update" | "errorPolicy"> | undefined) => Promise<SetPasswordChange>;
    attachAuthListener: (callback: (authenticated: boolean) => void) => () => void;
    isLoggedIn: () => boolean;
    watchQuery<T extends QueryShape, TResult>(query: T, mapFn: WatchMapFn<T, TResult>): <TVariables extends InferOptions<T>["variables"], TOptions extends Pick<InferOptions<T> | WatchQueryOptions<InferOptions<T>>, Exclude<keyof InferOptions<T> & "context", "variables"> | Exclude<keyof InferOptions<T> & "fetchPolicy", "variables"> | Exclude<keyof InferOptions<T> & "errorPolicy", "variables"> | Exclude<keyof InferOptions<T> & "variables", "variables"> | Exclude<keyof InferOptions<T> & "query", "variables"> | Exclude<keyof InferOptions<T> & "fetchResults", "variables"> | Exclude<keyof InferOptions<T> & "metadata", "variables"> | Exclude<keyof InferOptions<T> & "pollInterval", "variables"> | Exclude<keyof InferOptions<T> & "notifyOnNetworkStatusChange", "variables"> | Exclude<keyof InferOptions<T> & "returnPartialData", "variables">>>(variables: TVariables, options: TOptions & {
        skip?: boolean | undefined;
        onComplete?: (() => void) | undefined;
        onError?: ((error: ApolloError) => void) | undefined;
        onUpdate: (data: ReturnType<typeof mapFn> | null, loading?: boolean | undefined) => void;
    }) => {
        refetch: () => Promise<unknown>;
        unsubscribe: null;
        loadMore?: undefined;
        setOptions?: undefined;
    } | {
        loadMore: (extraVariables: RequireAtLeastOne<TVariables, keyof TVariables>, mergeResults?: boolean) => void;
        refetch: (newVariables?: TVariables | undefined) => Promise<{
            data: TResult | null;
        }>;
        setOptions: (newOptions: TOptions) => Promise<{
            data: TResult | null;
        }>;
        unsubscribe: () => void;
    };
    fireQuery<T extends QueryShape, TResult>(query: T, mapFn: MapFn<T, TResult>): (variables: InferOptions<T>["variables"], options?: Pick<InferOptions<T>, Exclude<keyof InferOptions<T>, "variables">> | undefined) => Promise<{
        data: TResult | null;
    }>;
    static firePromise<T extends QueryShape, TResult>(promise: () => Promise<any>, mapFn: MapFn<T, TResult> | WatchMapFn<T, TResult>): Promise<{
        data: ReturnType<typeof mapFn> | null;
    }>;
}
export default APIProxy;
