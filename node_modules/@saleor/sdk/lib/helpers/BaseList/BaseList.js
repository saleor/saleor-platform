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
class BaseList {
    constructor(client) {
        /**
         * Awaitable promise of the current query
         */
        this.current = null;
        /**
         * Apollo client
         */
        this.client = undefined;
        /**
         * List of objects, undefined if the first query is not finished yet
         */
        this.data = undefined;
        /**
         * Query variables containing pagination, sorting, etc.
         */
        this.variables = undefined;
        /**
         * PageInfo object holding information about last encountered cursor and
         * ability to fetch next page
         */
        this.pageInfo = undefined;
        this.cleanup = () => {
            this.data = undefined;
            this.pageInfo = undefined;
        };
        /**
         * Initialize list by querying first page
         */
        this.init = (variables) => __awaiter(this, void 0, void 0, function* () {
            this.cleanup();
            this.variables = variables;
            this.current = this.query(this.variables);
            const result = yield this.current;
            this.current = null;
            this.data = this.mapQueryData(result.data);
            this.pageInfo = this.getPageInfo(result);
        });
        /**
         * Get next page of objects
         */
        this.next = () => __awaiter(this, void 0, void 0, function* () {
            var _a, _b;
            if (!this.loading &&
                this.data && ((_a = this.pageInfo) === null || _a === void 0 ? void 0 : _a.hasNextPage) &&
                this.variables) {
                this.current = this.query(Object.assign(Object.assign({}, this.variables), { after: (_b = this.pageInfo) === null || _b === void 0 ? void 0 : _b.endCursor, first: this.variables.first }));
                const result = yield this.current;
                this.current = null;
                this.data = [...this.data, ...(this.mapQueryData(result.data) || [])];
                this.pageInfo = this.getPageInfo(result);
                return this.data;
            }
            return this.data || [];
        });
        this.client = client;
    }
    /**
     * Status of the current query
     */
    get loading() {
        return this.current !== null;
    }
}
exports.default = BaseList;
//# sourceMappingURL=BaseList.js.map