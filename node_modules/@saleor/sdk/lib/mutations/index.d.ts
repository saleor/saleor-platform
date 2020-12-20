import { ApolloClient, MutationOptions as ApolloMutationOptions } from "apollo-client";
import { DeleteUserAddress, DeleteUserAddressVariables } from "./gqlTypes/DeleteUserAddress";
import { CreateUserAddress, CreateUserAddressVariables } from "./gqlTypes/CreateUserAddress";
import { SetCustomerDefaultAddress, SetCustomerDefaultAddressVariables } from "./gqlTypes/SetCustomerDefaultAddress";
import { UpdateUserAddress, UpdateUserAddressVariables } from "./gqlTypes/UpdateUserAddress";
import { SetPassword, SetPasswordVariables } from "./gqlTypes/SetPassword";
import { PasswordChange, PasswordChangeVariables } from "./gqlTypes/PasswordChange";
import { AccountUpdate, AccountUpdateVariables } from "./gqlTypes/AccountUpdate";
export declare type MutationOptions<TData, TVariables> = Omit<ApolloMutationOptions<TData, TVariables>, "mutation">;
export declare const MUTATIONS: {
    AccountUpdate: <TCacheShape>(client: ApolloClient<TCacheShape>, options: MutationOptions<AccountUpdate, AccountUpdateVariables>) => Promise<import("apollo-link").FetchResult<AccountUpdate, Record<string, any>, Record<string, any>>>;
    AddressTypeUpdate: <TCacheShape_1>(client: ApolloClient<TCacheShape_1>, options: MutationOptions<SetCustomerDefaultAddress, SetCustomerDefaultAddressVariables>) => Promise<import("apollo-link").FetchResult<SetCustomerDefaultAddress, Record<string, any>, Record<string, any>>>;
    CreateUserAddress: <TCacheShape_2>(client: ApolloClient<TCacheShape_2>, options: MutationOptions<CreateUserAddress, CreateUserAddressVariables>) => Promise<import("apollo-link").FetchResult<CreateUserAddress, Record<string, any>, Record<string, any>>>;
    DeleteUserAddress: <TCacheShape_3>(client: ApolloClient<TCacheShape_3>, options: MutationOptions<DeleteUserAddress, DeleteUserAddressVariables>) => Promise<import("apollo-link").FetchResult<DeleteUserAddress, Record<string, any>, Record<string, any>>>;
    PasswordChange: <TCacheShape_4>(client: ApolloClient<TCacheShape_4>, options: MutationOptions<PasswordChange, PasswordChangeVariables>) => Promise<import("apollo-link").FetchResult<PasswordChange, Record<string, any>, Record<string, any>>>;
    SetPassword: <TCacheShape_5>(client: ApolloClient<TCacheShape_5>, options: MutationOptions<SetPassword, SetPasswordVariables>) => Promise<import("apollo-link").FetchResult<SetPassword, Record<string, any>, Record<string, any>>>;
    UpdateUserAddress: <TCacheShape_6>(client: ApolloClient<TCacheShape_6>, options: MutationOptions<UpdateUserAddress, UpdateUserAddressVariables>) => Promise<import("apollo-link").FetchResult<UpdateUserAddress, Record<string, any>, Record<string, any>>>;
};
export declare type MUTATIONS = typeof MUTATIONS;
