"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductList = void 0;
const BaseList_1 = __importDefault(require("../../helpers/BaseList"));
const products_1 = require("../../queries/products");
class ProductList extends BaseList_1.default {
    constructor() {
        super(...arguments);
        this.getPageInfo = result => { var _a; return (_a = result.data.products) === null || _a === void 0 ? void 0 : _a.pageInfo; };
        this.mapQueryData = data => { var _a; return (_a = data.products) === null || _a === void 0 ? void 0 : _a.edges.map(({ node }) => node); };
        this.query = (variables) => this.client.query({
            query: products_1.productList,
            variables,
        });
    }
}
exports.ProductList = ProductList;
//# sourceMappingURL=ProductList.js.map