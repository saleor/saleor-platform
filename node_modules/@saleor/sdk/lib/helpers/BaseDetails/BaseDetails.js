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
class BaseDetails {
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
         * Object, undefined if the initial query is not finished yet
         */
        this.data = undefined;
        /**
         * Query variables containing identifier, name, etc.
         */
        this.variables = undefined;
        this.cleanup = () => {
            this.data = undefined;
        };
        /**
         * Initialize details by querying it
         */
        this.init = (variables) => __awaiter(this, void 0, void 0, function* () {
            this.cleanup();
            this.variables = variables;
            this.current = this.query(this.variables);
            const result = yield this.current;
            this.current = null;
            this.data = this.mapQueryData(result.data);
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
exports.default = BaseDetails;
//# sourceMappingURL=BaseDetails.js.map