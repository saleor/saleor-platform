"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSaleorClient = void 0;
const apollo_client_1 = require("apollo-client");
const apollo_link_1 = require("apollo-link");
/**
 * Creates Apollo client.
 * @param cache Cache used by created Apollo client.
 * @param links Links used by created Apollo client.
 * @param options Rest options, which might be passed to Apollo client.
 */
function createSaleorClient(cache, links, options) {
    return new apollo_client_1.ApolloClient(Object.assign(Object.assign({}, options), { cache, link: apollo_link_1.ApolloLink.from(links) }));
}
exports.createSaleorClient = createSaleorClient;
//# sourceMappingURL=client.js.map