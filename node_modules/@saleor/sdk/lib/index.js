"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaleorManager = void 0;
const api_1 = require("./api");
const APIProxy_1 = __importDefault(require("./api/APIProxy"));
const links_1 = require("./links");
const client_1 = require("./client");
const cache_1 = require("./cache");
let SaleorManager = /** @class */ (() => {
    class SaleorManager {
        constructor(config, apolloConfig) {
            this.tokenRefreshing = false;
            this.tokenExpirationCallback = () => __awaiter(this, void 0, void 0, function* () {
                var _a, _b, _c;
                if (!this.tokenRefreshing) {
                    this.tokenRefreshing = true;
                    const tokenRefreshResult = yield ((_a = this.api) === null || _a === void 0 ? void 0 : _a.auth.refreshSignInToken());
                    if (!((_b = tokenRefreshResult === null || tokenRefreshResult === void 0 ? void 0 : tokenRefreshResult.data) === null || _b === void 0 ? void 0 : _b.token) || (tokenRefreshResult === null || tokenRefreshResult === void 0 ? void 0 : tokenRefreshResult.dataError)) {
                        yield ((_c = this.api) === null || _c === void 0 ? void 0 : _c.auth.signOut());
                    }
                    this.tokenRefreshing = false;
                }
            });
            this.onSaleorApiChange = () => {
                if (this.apiChangeListener) {
                    this.apiChangeListener(this.api);
                }
            };
            this.config = config;
            this.apolloConfig = Object.assign({ persistCache: true }, apolloConfig);
        }
        /**
         * Use this method to obtain current API and optionally listen to its update on occured changes within it.
         * @param apiChangeListener Function called to get an API and called on every API update.
         */
        connect(apiChangeListener) {
            return __awaiter(this, void 0, void 0, function* () {
                if (!this.api || !this.apiProxy || !this.apolloClient) {
                    const { api, apiProxy, apolloClient } = yield SaleorManager.createApi(this.config, this.apolloConfig, this.tokenExpirationCallback, this.onSaleorApiChange);
                    this.api = api;
                    this.apiProxy = apiProxy;
                    this.apolloClient = apolloClient;
                }
                if (apiChangeListener) {
                    this.apiChangeListener = apiChangeListener;
                }
                return { api: this.api, apolloClient: this.apolloClient };
            });
        }
    }
    SaleorManager.createApi = (config, apolloConfig, tokenExpirationCallback, onSaleorApiChange) => __awaiter(void 0, void 0, void 0, function* () {
        const { cache, persistCache, links, client, options } = apolloConfig;
        const saleorCache = !client && cache
            ? cache
            : yield cache_1.createSaleorCache({
                persistCache: !!persistCache,
            });
        const saleorLinks = !client && links
            ? links
            : links_1.createSaleorLinks({
                apiUrl: config.apiUrl,
                tokenExpirationCallback,
            });
        const apolloClient = client || client_1.createSaleorClient(saleorCache, saleorLinks, options);
        const apiProxy = new APIProxy_1.default(apolloClient);
        const api = new api_1.SaleorAPI(apolloClient, apiProxy, config, onSaleorApiChange);
        return { api, apiProxy, apolloClient };
    });
    return SaleorManager;
})();
exports.SaleorManager = SaleorManager;
__exportStar(require("./auth"), exports);
__exportStar(require("./cache"), exports);
__exportStar(require("./links"), exports);
__exportStar(require("./client"), exports);
__exportStar(require("./gqlTypes/globalTypes"), exports);
// FIXME: It's imported here because it's not a monorepo yet
/* eslint-disable import/no-cycle */
__exportStar(require("./react"), exports);
/* eslint-enable */
//# sourceMappingURL=index.js.map