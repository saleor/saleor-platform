import { InMemoryCache } from "apollo-cache-inmemory";
interface SaleorCacheConfig {
    /**
     * Determines if the cache has to be persisted in local storage. False by default.
     */
    persistCache?: boolean;
}
/**
 * Creates cache for Apollo client.
 * @param cacheConfig Configuration for created cache.
 */
export declare const createSaleorCache: ({ persistCache, }: SaleorCacheConfig) => Promise<InMemoryCache>;
export {};
