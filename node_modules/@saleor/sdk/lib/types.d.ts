import ApolloClient, { ApolloClientOptions, ObservableQuery } from "apollo-client";
import { ApolloLink } from "apollo-link";
import { ApolloCache } from "apollo-cache";
export declare type QueryShape = (...args: any) => any;
export declare type MapFn<T extends QueryShape, TResult> = (data: QueryData<T>) => TResult;
export declare type WatchMapFn<T extends QueryShape, TResult> = (data: WatchQueryData<T>) => TResult;
export declare type InferOptions<T> = T extends (_: any, o: infer O) => any ? O : never;
export declare type QueryData<T extends (...args: any) => any> = ReturnType<T> extends Promise<infer R> ? R extends {
    [key: string]: any;
} ? R["data"] : null : never;
export declare type WatchQueryData<T extends (...args: any) => any> = ReturnType<T> extends ObservableQuery<infer R> ? R : never;
export declare type ApolloConfigOptions = Omit<ApolloClientOptions<any>, "link" | "cache">;
export interface Config {
    /**
     * Url of the Saleor GraphQL API.
     */
    apiUrl: string;
    /**
     * Determines data which have to be queried on start.
     */
    loadOnStart: {
        auth: boolean;
        checkout: boolean;
    };
}
export declare type DefaultConfig = Pick<Config, "loadOnStart">;
export declare type ConfigInput = Omit<Config, keyof DefaultConfig> & Partial<DefaultConfig>;
export interface ApolloConfigInput {
    /**
     * Custom cache to be used by Apollo client. By default preconfigured cache is created automatically.
     */
    cache?: ApolloCache<any>;
    /**
     * Determines if the cache has to be persisted in local storage. True by default.
     */
    persistCache?: boolean;
    /**
     * Custom list of links to be used by Apollo client. By default preconfigured links are created automatically.
     */
    links?: ApolloLink[];
    /**
     * Custom Apollo client to be used by Saleor API. By default client is created automatically with default custom cache and links.
     * If you pass custom client, custom cache and links passed in this config will not be used, you must pass them to client oneself.
     */
    client?: ApolloClient<any>;
    /**
     * The rest of Apollo client options, which might be passed to it during its initialization.
     */
    options?: ApolloConfigOptions;
}
