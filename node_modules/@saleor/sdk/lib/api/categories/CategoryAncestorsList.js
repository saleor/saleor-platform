"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryAncestorsList = void 0;
const BaseList_1 = __importDefault(require("../../helpers/BaseList"));
const category_1 = require("../../queries/category");
class CategoryAncestorsList extends BaseList_1.default {
    constructor() {
        super(...arguments);
        this.getPageInfo = result => { var _a, _b; return (_b = (_a = result.data.category) === null || _a === void 0 ? void 0 : _a.ancestors) === null || _b === void 0 ? void 0 : _b.pageInfo; };
        this.mapQueryData = data => { var _a, _b; return (_b = (_a = data.category) === null || _a === void 0 ? void 0 : _a.ancestors) === null || _b === void 0 ? void 0 : _b.edges.map(({ node }) => node); };
        this.query = (variables) => this.client.query({
            query: category_1.categoryAncestorsList,
            variables,
        });
    }
}
exports.CategoryAncestorsList = CategoryAncestorsList;
//# sourceMappingURL=CategoryAncestorsList.js.map