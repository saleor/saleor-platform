"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryDetails = void 0;
const BaseDetails_1 = __importDefault(require("../../helpers/BaseDetails"));
const category_1 = require("../../queries/category");
class CategoryDetails extends BaseDetails_1.default {
    constructor() {
        super(...arguments);
        this.mapQueryData = data => data.category || undefined;
        this.query = (variables) => this.client.query({
            query: category_1.categoryDetails,
            variables,
        });
    }
}
exports.CategoryDetails = CategoryDetails;
//# sourceMappingURL=CategoryDetails.js.map