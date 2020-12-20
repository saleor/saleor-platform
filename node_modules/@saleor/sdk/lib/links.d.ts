interface SaleorLinksConfig {
    /**
     * Url of the Saleor GraphQL API.
     */
    apiUrl: string;
    /**
     * Callback called when token expiration error occured in Saleor API response.
     */
    tokenExpirationCallback: () => void;
}
/**
 * Creates list of links for Apollo client.
 * @param linksConfig Configuration for created links.
 */
export declare const createSaleorLinks: ({ apiUrl, tokenExpirationCallback, }: SaleorLinksConfig) => import("apollo-link").ApolloLink[];
export {};
