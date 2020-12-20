import { ApolloCache } from "apollo-cache";
import { ApolloClient } from "apollo-client";
import { ApolloLink } from "apollo-link";
import { ApolloConfigOptions } from "./types";
/**
 * Creates Apollo client.
 * @param cache Cache used by created Apollo client.
 * @param links Links used by created Apollo client.
 * @param options Rest options, which might be passed to Apollo client.
 */
export declare function createSaleorClient(cache: ApolloCache<any>, links: ApolloLink[], options?: ApolloConfigOptions): ApolloClient<any>;
