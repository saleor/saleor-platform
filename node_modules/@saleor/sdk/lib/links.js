"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSaleorLinks = void 0;
const apollo_link_batch_http_1 = require("apollo-link-batch-http");
const apollo_link_retry_1 = require("apollo-link-retry");
const auth_1 = require("./auth");
/**
 * Creates list of links for Apollo client.
 * @param linksConfig Configuration for created links.
 */
exports.createSaleorLinks = ({ apiUrl, tokenExpirationCallback, }) => {
    const invalidTokenLink = auth_1.invalidTokenLinkWithTokenHandler(tokenExpirationCallback);
    return [
        invalidTokenLink,
        auth_1.authLink,
        new apollo_link_retry_1.RetryLink(),
        new apollo_link_batch_http_1.BatchHttpLink({ credentials: "include", uri: apiUrl }),
    ];
};
//# sourceMappingURL=links.js.map