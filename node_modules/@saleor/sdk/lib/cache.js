"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSaleorCache = void 0;
const apollo_cache_inmemory_1 = require("apollo-cache-inmemory");
const apollo_cache_persist_1 = require("apollo-cache-persist");
const consts_1 = require("./consts");
/**
 * Creates cache for Apollo client.
 * @param cacheConfig Configuration for created cache.
 */
exports.createSaleorCache = ({ persistCache = false, }) => __awaiter(void 0, void 0, void 0, function* () {
    const saleorCache = new apollo_cache_inmemory_1.InMemoryCache({
        dataIdFromObject: obj => {
            // eslint-disable-next-line no-underscore-dangle
            if (obj.__typename === "Shop") {
                return "shop";
            }
            return apollo_cache_inmemory_1.defaultDataIdFromObject(obj);
        },
    });
    if (persistCache && consts_1.LOCAL_STORAGE_EXISTS) {
        yield apollo_cache_persist_1.persistCache({
            cache: saleorCache,
            storage: window.localStorage,
        });
    }
    return saleorCache;
});
//# sourceMappingURL=cache.js.map