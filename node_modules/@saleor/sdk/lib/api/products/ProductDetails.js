"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductDetails = void 0;
const BaseDetails_1 = __importDefault(require("../../helpers/BaseDetails"));
const products_1 = require("../../queries/products");
class ProductDetails extends BaseDetails_1.default {
    constructor() {
        super(...arguments);
        this.mapQueryData = data => data.product || undefined;
        this.query = (variables) => this.client.query({
            query: products_1.productDetails,
            variables,
        });
    }
}
exports.ProductDetails = ProductDetails;
//# sourceMappingURL=ProductDetails.js.map