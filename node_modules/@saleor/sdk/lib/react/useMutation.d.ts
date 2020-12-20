import { DataProxy } from "apollo-cache";
import { FetchResult } from "apollo-link";
import { MutationOptions } from "../mutations";
import { ApolloErrorWithUserInput, Options, ReturnData, Variables } from "./types";
declare type MutationUpdaterFn<TData = Record<string, any>> = (proxy: DataProxy, mutationResult: FetchResult<TData>) => void;
export interface BaseMutationHookOptions<TData, TVariables> extends Omit<MutationOptions<TData, TVariables>, "update"> {
    update?: MutationUpdaterFn<TData>;
}
export declare type MutationFn<TData, TVariables> = (variables?: TVariables, options?: BaseMutationHookOptions<TData, never>) => Promise<TData | null>;
export interface MutationResult<TData extends {
    data: any;
}> {
    called: boolean;
    data: TData["data"] | null;
    error: ApolloErrorWithUserInput | null;
    loading: boolean;
}
export declare const mutationFactory: <T extends "client" | "getAttributes" | "getOrdersByUser" | "getOrderDetails" | "getVariantsProducts" | "getShopDetails" | "setUserDefaultAddress" | "setDeleteUserAddress" | "setCreateUserAddress" | "setUpdateuserAddress" | "setAccountUpdate" | "setPassword" | "setPasswordChange" | "attachAuthListener" | "isLoggedIn" | "watchQuery" | "fireQuery", TVariables extends Variables<T>, TOptions extends Options<T>>(mutation: T) => (variables?: TVariables | undefined, options?: TOptions | undefined) => [MutationFn<ReturnData<T>, TVariables>, MutationResult<ReturnData<T>>];
export {};
