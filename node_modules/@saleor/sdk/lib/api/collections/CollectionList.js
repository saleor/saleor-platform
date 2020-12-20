"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CollectionList = void 0;
const BaseList_1 = __importDefault(require("../../helpers/BaseList"));
const collections_1 = require("../../queries/collections");
class CollectionList extends BaseList_1.default {
    constructor() {
        super(...arguments);
        this.getPageInfo = result => { var _a; return (_a = result.data.collections) === null || _a === void 0 ? void 0 : _a.pageInfo; };
        this.mapQueryData = data => { var _a; return (_a = data.collections) === null || _a === void 0 ? void 0 : _a.edges.map(({ node }) => node); };
        this.query = (variables) => this.client.query({
            query: collections_1.collections,
            variables,
        });
    }
}
exports.CollectionList = CollectionList;
//# sourceMappingURL=CollectionList.js.map